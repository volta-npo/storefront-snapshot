use std::env;
use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};

use storefront_snapshot_backend::{blocks_release, release_fingerprint, release_score, sample_gates, PRODUCT_SLUG, PRODUCT_TITLE};

fn response(status: &str, body: &str) -> String {
    format!("HTTP/1.1 {status}\r\nContent-Type: application/json; charset=utf-8\r\nContent-Length: {}\r\nConnection: close\r\n\r\n{body}", body.len())
}

fn handle(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    let _ = stream.read(&mut buffer);
    let request = String::from_utf8_lossy(&buffer);
    let gates = sample_gates();
    let body = if request.starts_with("GET /health") || request.starts_with("GET / " ) {
        format!(r#"{{"ok":true,"product":"{}","title":"{}"}}"#, PRODUCT_SLUG, PRODUCT_TITLE)
    } else if request.starts_with("GET /score") {
        format!(r#"{{"product":"{}","score":{},"blocked":{},"fingerprint":"{}"}}"#, PRODUCT_SLUG, release_score(&gates), blocks_release(&gates), release_fingerprint(&gates))
    } else {
        let not_found = r#"{"ok":false,"error":"not_found"}"#;
        let _ = stream.write_all(response("404 Not Found", not_found).as_bytes());
        return;
    };
    let _ = stream.write_all(response("200 OK", &body).as_bytes());
}

fn serve() -> std::io::Result<()> {
    let addr = env::var("VOLTA_BACKEND_ADDR").unwrap_or_else(|_| "127.0.0.1:8788".to_string());
    let listener = TcpListener::bind(&addr)?;
    println!("{} backend listening on http://{}", PRODUCT_TITLE, addr);
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => handle(stream),
            Err(err) => eprintln!("connection error: {err}"),
        }
    }
    Ok(())
}

fn main() {
    if env::args().any(|arg| arg == "serve") {
        serve().expect("backend server failed");
        return;
    }
    let gates = sample_gates();
    println!("{} ({})", PRODUCT_TITLE, PRODUCT_SLUG);
    println!("score={}", release_score(&gates));
    println!("blocked={}", blocks_release(&gates));
    println!("fingerprint={}", release_fingerprint(&gates));
}
