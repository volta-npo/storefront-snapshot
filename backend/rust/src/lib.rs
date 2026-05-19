//! Rust release-gate engine for Storefront Snapshot.
//!
//! This backend crate is for fast, deterministic checks that can later power
//! CLIs, API workers, batch validators, or WebAssembly modules.

use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};

pub const PRODUCT_SLUG: &str = "storefront-snapshot";
pub const PRODUCT_TITLE: &str = "Storefront Snapshot";
pub const DOMAIN_ROWS: &[&str] = &[
    "Before desktop screenshot",
    "Before mobile screenshot",
    "After desktop screenshot",
    "After mobile screenshot",
    "Transformation delta linked",
    "Owner quote captured",
    "Consent status recorded",
    "Sponsor-safe narrative drafted",
];

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ReleaseGate {
    pub label: String,
    pub status: String,
    pub evidence: String,
    pub severity: String,
}

pub fn status_points(status: &str) -> u8 {
    match status {
        "approved" => 100,
        "ready" => 80,
        "in-progress" => 45,
        _ => 0,
    }
}

pub fn release_score(gates: &[ReleaseGate]) -> u8 {
    if gates.is_empty() { return 0; }
    let total: u32 = gates.iter().map(|gate| status_points(gate.status.as_str()) as u32).sum();
    (total / gates.len() as u32) as u8
}

pub fn blocks_release(gates: &[ReleaseGate]) -> bool {
    gates.iter().any(|gate| {
        gate.status == "blocked" || (gate.severity == "critical" && gate.status != "approved") || gate.evidence.trim().is_empty()
    })
}

pub fn release_fingerprint(gates: &[ReleaseGate]) -> String {
    let mut hasher = DefaultHasher::new();
    PRODUCT_SLUG.hash(&mut hasher);
    for gate in gates {
        gate.label.hash(&mut hasher);
        gate.status.hash(&mut hasher);
        gate.evidence.hash(&mut hasher);
        gate.severity.hash(&mut hasher);
    }
    format!("{:016x}", hasher.finish())
}

pub fn sample_gates() -> Vec<ReleaseGate> {
    DOMAIN_ROWS.iter().map(|row| ReleaseGate {
        label: (*row).to_string(),
        status: "approved".to_string(),
        evidence: format!("Verified evidence for {row}"),
        severity: "normal".to_string(),
    }).collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn approved_sample_is_release_ready() {
        let gates = sample_gates();
        assert_eq!(release_score(&gates), 100);
        assert!(!blocks_release(&gates));
        assert_eq!(release_fingerprint(&gates).len(), 16);
    }

    #[test]
    fn missing_evidence_blocks_release() {
        let gates = vec![ReleaseGate {
            label: "Critical gate".to_string(),
            status: "approved".to_string(),
            evidence: "".to_string(),
            severity: "critical".to_string(),
        }];
        assert!(blocks_release(&gates));
    }
}
