export const domain = {
    "kind": "comparison",
    "title": "Storefront Snapshot Comparison",
    "purpose": "A purpose-built comparison interface for before-and-after visual reports for the businesses volta transforms.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Capture ledger",
    "metricLabels": [
        "Delta Completeness",
        "Proof Readiness",
        "Sponsor Narrative Strength"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "number of transformations documented with proof",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Before desktop screenshot",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Before/after report",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Before desktop screenshot",
        "Before mobile screenshot",
        "After desktop screenshot",
        "After mobile screenshot",
        "Transformation delta linked",
        "Owner quote captured",
        "Consent status recorded",
        "Sponsor-safe narrative drafted",
        "Before/after pair quality scored",
        "Customer journey impact tagged",
        "Sponsor KPI selected",
        "Public story approval recorded"
    ],
    "artifacts": [
        "Before/after report",
        "Sponsor slide outline",
        "Transformation ledger CSV",
        "Impact story brief",
        "Before-after asset manifest",
        "Sponsor KPI snapshot"
    ],
    "checks": [
        "After capture must link to before capture",
        "Consent required for quotes/screenshots",
        "Capture dates must be ordered",
        "Every public asset needs consent status",
        "Before and after captures need matching viewport labels",
        "Sponsor KPI must link to transformation delta"
    ],
    "sampleClient": "Riverside Community Bakery",
    "saas": {
        "personas": ["Transformation storyteller", "Sponsor program manager", "Business owner"],
        "stages": [
            { "name": "Asset intake", "goal": "Collect before captures, after captures, and owner consent metadata.", "rowPatterns": ["Before|After|Consent|asset"] },
            { "name": "Delta analysis", "goal": "Connect visual changes to customer journey and operational impact.", "rowPatterns": ["delta|pair|journey|KPI"] },
            { "name": "Sponsor story", "goal": "Package a sponsor-safe narrative with approved public proof.", "rowPatterns": ["Sponsor|quote|story|approval"] }
        ],
        "sampleValues": { "primary-goal": "turn each transformation into a sponsor-ready proof story" },
        "sampleRows": { "Customer journey impact tagged": "Tagged menu visibility, trust signals, and mobile CTA improvements", "Sponsor KPI selected": "Selected faster first contact and clearer services as sponsor KPIs" }
    }
};
//# sourceMappingURL=domain.js.map