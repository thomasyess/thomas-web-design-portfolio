# Thomas Web Design Portfolio

Mobile-first portfolio with three complete, browser-ready concept websites.

## Project structure

```text
site/
  index.html                 Portfolio homepage
  assets/
    css/                     Project and portfolio styles
    js/                      Navigation, FAQ and form interactions
  projects/
    koko/index.html          KOKO Amusement redesign
    accounting/index.html    Bilingual accounting firm
    migration/index.html     Migration advice practice
```

## Local URLs

When serving `site/` on port `8765`:

- Portfolio: `http://127.0.0.1:8765/`
- KOKO: `http://127.0.0.1:8765/projects/koko/`
- Accounting: `http://127.0.0.1:8765/projects/accounting/`
- Migration: `http://127.0.0.1:8765/projects/migration/`

## WordPress and Elementor implementation

- Convert each top-level section to an Elementor Container.
- Configure colours, typography, buttons and spacing as Global Styles.
- Save headers, footers, service cards and CTA blocks as reusable templates.
- Replace demo forms with a secure form provider, consent logging and CRM routing.
- Use native accordion widgets for FAQs and lazy-load maps or social embeds.

All three projects are clearly labelled concepts and do not imply a real client relationship.
