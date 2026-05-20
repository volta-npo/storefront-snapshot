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
  "modules": [
      {
          "name": "Before/after asset vault",
          "description": "Collects screenshots, photo metadata, consent, capture date, and viewport pairing for each transformation.",
          "metrics": [
              "Asset pairs",
              "Consent coverage",
              "Capture chronology"
          ],
          "deliverable": "Before-after asset manifest"
      },
      {
          "name": "Delta annotation lab",
          "description": "Turns visual differences into tagged customer-journey improvements and measurable sponsor proof.",
          "metrics": [
              "Improvement tags",
              "Journey moments",
              "KPI links"
          ],
          "deliverable": "Annotated transformation ledger"
      },
      {
          "name": "Sponsor story builder",
          "description": "Generates a public-safe narrative that connects the client problem, intervention, and outcome.",
          "metrics": [
              "Story clarity",
              "Public-safe quotes",
              "Sponsor KPIs"
          ],
          "deliverable": "Sponsor-ready impact story"
      },
      {
          "name": "Portfolio approval desk",
          "description": "Tracks owner approval, mentor review, and public-use status before any asset leaves the workspace.",
          "metrics": [
              "Approval state",
              "Redaction needs",
              "Publish readiness"
          ],
          "deliverable": "Public story approval packet"
      }
  ],
  "plays": [
      {
          "name": "Transformation capture kit",
          "trigger": "A project has before and after assets but no consistent evidence model.",
          "outcome": "A paired, consented, sponsor-safe asset set."
      },
      {
          "name": "Sponsor KPI narrative",
          "trigger": "Program needs proof that student work created visible business value.",
          "outcome": "A short story and KPI snapshot suitable for donor/sponsor reporting."
      },
      {
          "name": "Portfolio-safe publication",
          "trigger": "Students want public case-study assets.",
          "outcome": "Owner-approved images, captions, and redactions ready for portfolio use."
      }
  ],
  "economics": {
      "buyer": "Program sponsor, mentor, or transformation program manager",
      "valueMetric": "Approved transformation stories published",
      "priceHint": "$149/month proof library or $750 sponsor-report sprint",
      "northStar": "Approved public proof packets per cohort"
  },
  "exportSuite": [
      "Sponsor slide outline",
      "Transformation ledger CSV",
      "Before-after asset manifest",
      "Impact story brief",
      "Portfolio approval packet"
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
    "sampleRows": {"Before desktop screenshot": "Captured original homepage at 1440px with timestamp and source URL", "Before mobile screenshot": "Captured original mobile flow with menu hidden below fold", "After desktop screenshot": "Captured redesigned homepage with clear service hierarchy", "After mobile screenshot": "Captured post-launch mobile CTA and menu visibility", "Transformation delta linked": "Before and after assets paired to menu visibility and booking CTA changes", "Owner quote captured": "Owner quote approved for private sponsor reporting", "Consent status recorded": "Screenshot, quote, and public-use consent states recorded separately", "Sponsor-safe narrative drafted": "Narrative removes private revenue and names only approved improvements", "Before/after pair quality scored": "Viewport, date, source, and crop quality scored above approval threshold", "Customer journey impact tagged": "Tagged menu visibility, trust signals, and mobile CTA improvements", "Sponsor KPI selected": "Selected faster first contact and clearer services as sponsor KPIs", "Public story approval recorded": "Owner approval recorded for sponsor deck, not public ads"}
  }
};
