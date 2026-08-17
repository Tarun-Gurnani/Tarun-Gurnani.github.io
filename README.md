# Tarun Gurnani — Portfolio v2

A lightweight, responsive, dependency-minimal portfolio designed for GitHub Pages.

## Folder structure

```text
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── assets/
│   └── Tarun_Gurnani_Latest_Resume.pdf
└── img/                    <-- keep your existing image folder here
    ├── profile/
    ├── icons/
    ├── Company/
    ├── Certs/
    ├── Paper_Extra_img/
    └── WORDS_ABOUT_ME/
```

## Important

The new version does not require Bootstrap, jQuery, Magnific Popup, or AOS. It is plain HTML/CSS/JavaScript and is therefore easy to deploy on GitHub Pages.

Your existing `img/` folder is intentionally not recreated because the uploaded conversation contained the HTML/CSS/JS and PDFs, but not the full image/icon folder. Copy your existing `img/` directory into this project unchanged if you want to keep the current profile photo, company logos, icons, certificate images and recommendation photos.

The resume PDF is already included under `assets/`.

## GitHub Pages

Replace the contents of the repository that currently serves `https://tarun-gurnani.github.io/` with this package, while preserving your existing `img/` directory.

Then commit and push:

```bash
git add .
git commit -m "Redesign portfolio"
git push
```

If GitHub Pages is already configured from the `main` branch root, no additional build step is required.

## Notes

- All content in the new site is based on the supplied LinkedIn headline/About text and uploaded résumé.
- Existing portfolio credentials/links from the supplied `index.html` have been retained.
- The new site intentionally removes the old percentage-style skill bars because those numbers are subjective and can make a senior architecture portfolio look less credible.


## v2.1 additions

The hero now uses the existing profile image path `img/profile/pp4.jpg`.

Two new architecture-level projects were added:
- **AI-Assisted MDM Data Stewardship** — Snowpark, Cortex embeddings, vector similarity, rule scoring, Cortex LLM adjudication, Streamlit stewardship UI and Snowflake Tasks; HCP/outlet matching across IQVIA, Knipper, Amazon and OneKey.
- **AI Call Planning / Next-Best-Action** — Snowpark ML, XGBoost, Snowflake Model Registry, Snowflake Tasks and Streamlit using MTRX, call activity and territory goals.

The public portfolio uses concise architecture summaries rather than exposing the full implementation SQL/Python from the project notes.
