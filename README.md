# Osama Alsmadi | Personal Portfolio

A bilingual English/Arabic portfolio presenting cybersecurity projects, technical skills, and contact information.

**HTML · CSS · JavaScript · Responsive layout · RTL**

## Explore

| File | Purpose |
| --- | --- |
| [portfolio/index.html](portfolio/index.html) | Sections, project cards, and contact form |
| [portfolio/style.css](portfolio/style.css) | Themes, responsive layout, and RTL styling |
| [portfolio/script.js](portfolio/script.js) | Language, theme, navigation, and form behavior |
| [portfolio/assets](portfolio/assets) | Profile images, project previews, and CV |

## Run locally

Open `portfolio/index.html` in a browser, or serve the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8000/portfolio/.

## Customize

- Edit the translation dictionary in `script.js` for English and Arabic content.
- Update project links and assets in `index.html`.
- Change theme variables in `style.css`.
- Review `FORM_ENDPOINT` before enabling contact-form delivery; submission uses an external service.

## Publishing

The site entry point is inside `portfolio/`, not the repository root. Configure hosting to publish that directory, or include `/portfolio/` in the site URL when hosting the entire repository. After deployment, set the Open Graph image to the actual absolute image URL.

## Review checklist

Check English and Arabic layouts, mobile navigation, keyboard interaction, theme switching, CV download, and contact-form success/error states. Do not submit test messages without intentionally enabling email delivery.

---

Part of [Osama Alsmadi’s project portfolio](https://github.com/osamaalsmadi).
