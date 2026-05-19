export const v3 = {
  "productName": "Storefront Snapshot",
  "productTier": "v3-production",
  "category": "Digital Presence",
  "acceptance": [
    "public evidence captured",
    "owner handoff is plain-English",
    "accessibility basics checked",
    "local SEO output exported"
  ],
  "capabilities": [
    "Domain-specific workbench: Before/After Transformation Studio",
    "Operational table: Capture ledger",
    "Local autosave with no backend dependency",
    "JSON production bundle export/import",
    "CSV operational table export",
    "Markdown production certification export",
    "Print-ready handoff and release packet",
    "Integrity hash for release evidence"
  ],
  "schemas": [
    "workspace.version:string",
    "workspace.updatedAt:iso-date",
    "releaseGate.status:enum",
    "releaseGate.evidence:string",
    "releaseGate.owner:string",
    "releaseGate.severity:enum",
    "bundle.product.slug:string",
    "bundle.certification.hash:string"
  ],
  "qualityGates": [
    "All exports work offline",
    "Privacy and data handling documented",
    "No blocked critical gates",
    "Every certified claim has evidence",
    "Import rejects wrong product bundles",
    "Release hash is deterministic",
    "Client-safe markdown contains no secrets",
    "CSV contains every operational row",
    "After capture must link to before capture",
    "Consent required for quotes/screenshots",
    "Capture dates must be ordered"
  ],
  "releaseChecklist": [
    "Core workflow completes from empty state to export",
    "Sample data demonstrates realistic Volta field usage",
    "JSON export/import round trip validated",
    "Markdown certification packet generated",
    "CSV operational export generated",
    "Print view produces client-safe handoff",
    "No raw passwords or secrets stored",
    "Local-first privacy model documented",
    "Keyboard-accessible controls present",
    "Owner/mentor review gates represented",
    "Evidence required for launch-ready claims",
    "Production certification hash generated",
    "Delta Completeness reaches production threshold",
    "Proof Readiness is documented with evidence",
    "Sponsor Narrative Strength has no unresolved blocker",
    "Before/after report verified",
    "Sponsor slide outline verified",
    "Transformation ledger CSV verified"
  ],
  "operations": [
    "Operate as a static local-first OSS product.",
    "Privacy: client data stays in the browser unless the user exports it.",
    "Backups: use JSON production bundle export after every client session.",
    "Recovery: import a previously exported production bundle.",
    "Release: certify all gates before public client handoff.",
    "Support: triage issues by blocked, critical, high, normal severity."
  ],
  "testPlan": [
    "Definition schema tests",
    "Initial non-certified state test",
    "Certification happy path test",
    "Export/import round-trip test",
    "Wrong-slug rejection test",
    "Markdown safety test",
    "CSV completeness test",
    "Integrity mutation test",
    "Self-audit test",
    "Blocked/critical gate tests"
  ]
};
