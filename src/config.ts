export const config = {
  "number": 2,
  "slug": "storefront-snapshot",
  "title": "Storefront Snapshot",
  "category": "Digital Presence",
  "tagline": "Before-and-after visual reports for the businesses Volta transforms.",
  "persona": "Chapter leads who need to show owners, sponsors, and students what changed.",
  "gap": "Impact reporting often becomes screenshots in slide decks. Teams need repeatable evidence capture before work begins and after launch.",
  "niche": "Small-business digital transformation portfolios and CSR documentation.",
  "metric": "number of transformations documented with proof",
  "modules": [
    "Before capture checklist",
    "After capture checklist",
    "Delta story builder",
    "Sponsor-ready PDF outline"
  ],
  "theme": {
    "accent": "#2563eb",
    "accent2": "#60a5fa",
    "emoji": "\ud83c\udf10",
    "metricLabel": "Presence readiness",
    "workflow": [
      "Capture public evidence",
      "Score the digital gap",
      "Prioritize owner-safe fixes",
      "Export handoff packet"
    ],
    "privacy": "Only public business information and project notes should be entered. Do not store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "before-capture-checklist",
      "label": "Before capture checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify before capture checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "after-capture-checklist",
      "label": "After capture checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify after capture checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "delta-story-builder",
      "label": "Delta story builder",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify delta story builder with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "sponsor-ready-pdf-outline",
      "label": "Sponsor-ready PDF outline",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify sponsor-ready pdf outline with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Storefront Snapshot and capture baseline evidence.",
      "Complete the before capture checklist workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Riverside Community Bakery",
    "chapter": "Jacksonville",
    "studentLead": "Volta Student Lead",
    "notes": "Digital presence sprint for an under-digitized local storefront. Storefront Snapshot sample.",
    "evidencePrefix": "Storefront Snapshot",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
