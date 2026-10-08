# Science Quest Lab — Florida grade 6

Adapted from the Chemistry Mastery Lab design for an 11-year-old learner.

## Included
- 25 lessons across five independent paths covering the four-quarter topic outline.
- Eight cells lessons immediately available as the first path.
- 245 original multiple-choice questions, shuffled answers, balanced unit challenges and year review.
- 18 practice games/labs: a 26-idea Cells class review, interactive plant/animal diagrams, label challenge, organelle sorting, osmosis, hierarchy, motion graphs, forces, energy, inquiry, thermal transfer, weather/water, Earth changes, classification and body systems.
- Five-question lesson quizzes: 80% unlocks the next lesson in that path.
- Unit challenges sample two questions per lesson; year review samples one per lesson. At least 90% passes; thresholds round up to whole questions.
- Highest scores persist in localStorage on the same browser; no accounts or cross-device sync.
- Study cards, built-in Pip study guide, parent/source information, and at-home activities with supervision notes.

## Running
Serve this directory with a static web server, e.g. `python -m http.server 8765`.
There are no dependencies, paid AI calls, backend services, or build step.
The fonts imported by lab-base.css are optional; system fonts are fallbacks.

## Source and deployment
This app lives on the `science-quest` branch of `importcult/ap-chemistry-tutor`.
The chemistry app continues to use its original `main` branch.
The separate Vercel project is `science-quest-grade6`; deployments are explicit file snapshots to avoid cross-deploying the chemistry branch.

## Educational scope
Based on St. Johns 2026–27 grade 6 science pacing topics and Florida benchmarks, with extra cells practice. Quarter labels are recommended organization, not a claim that every county uses the same sequence. It is a study supplement; the child's teacher's chapter and test requirements take priority. Florida statewide science assessment is grades 5 and 8, not a grade 6 statewide exam. Questions are original; no official assessment items copied.

Models simplify real processes. The osmosis model assumes water can cross and solute cannot, with equal starting volumes. The hill energy model neglects friction. Accumulated-distance graphs cannot determine direction; position-time graphs can show reversals. Pip is a curated study guide, not generative AI.

## Discovery crew
Four original SVG companions (Dash, Bolt, Reef, Nova) with selectable, device-local preferences. CSS animations include idle waves, a running mission sprite, quiz celebrations, and encouraging retry poses. Animation controls persist separately from academic progress and respect prefers-reduced-motion. No paid animation service or additional runtime dependencies.

## Class-review topic update
The Cells path includes original explained practice aligned with all 26 distinct concepts across these two assigned review sets:
- [Grade 6 Unit 5 Cells](https://dashboard.blooket.com/set/67f2fa31c30ee886e6a171a1) (14 entries)
- [Unit 6 Cells](https://dashboard.blooket.com/set/62fe650df393d482100fb707) (24 entries)

Five existing lessons now explain additional cell types, organelles, nutrients, protein processing/recycling, selective permeability, and active/passive transport. Ten study cards supplement the lessons. The class-review game includes every distinct topic once, with shuffled order and answers, no timer, and matching lesson help after each answer. It is practice only; existing quiz mastery requirements stay the same.

New questions and cards are appended, preserving existing lesson indexes, question IDs, card indexes, saved mastery, and crew settings. Main chemistry content remains on its separate branch.
