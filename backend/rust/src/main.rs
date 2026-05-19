use storefront_snapshot_backend::{blocks_release, release_fingerprint, release_score, sample_gates, PRODUCT_SLUG, PRODUCT_TITLE};

fn main() {
    let gates = sample_gates();
    println!("{} ({})", PRODUCT_TITLE, PRODUCT_SLUG);
    println!("score={}", release_score(&gates));
    println!("blocked={}", blocks_release(&gates));
    println!("fingerprint={}", release_fingerprint(&gates));
}
