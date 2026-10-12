# Osama Alsmadi - Personal Portfolio

A responsive, bilingual (English / Arabic) portfolio built from scratch with **pure HTML, CSS and JavaScript** (no frameworks, templates or UI libraries).

## How to run
- **Computer:** unzip the folder, then double-click `index.html` (or open the folder in VS Code and use *Live Server*).
- **Mobile:** upload the folder to GitHub Pages / Netlify and open the link on your phone (see "Publish online").

## Project structure
```
index.html     page structure (all sections)
style.css      themes, Flexbox/Grid layout, media queries, RTL support
script.js      EN / AR texts + theme, language, avatar, nav, counters, neural background, form
assets/        CV (PDF) and images/ (profile photos, project previews, og-cover.jpg)
README.md      this file
```

## Features
- Navbar with scroll-spy, mobile menu, theme switcher, language switcher, CV download, neural-background on/off
- About Me with avatar selector (changes `img.src` and `img.alt` with a CSS fade transition)
- Animated counters, experience/education timeline, skills grid, projects 00-03, hobbies
- Contact form (validation + Formspree or mail app), footer, back-to-top button
- English / Arabic with automatic `lang` and `dir` (`ltr` / `rtl`); layout uses CSS logical properties so RTL never breaks
- Interactive neural-network canvas background that reacts to the pointer
- Accessibility: skip link, visible focus, ARIA states, reduced-motion support

## Event lifecycle (write this part in your own words)
Every interactive feature follows the same four steps:

**User action -> Event firing -> JavaScript callback -> DOM/CSS mutation**

Example 1: Theme button
1. *User action:* the visitor clicks the palette button.
2. *Event firing:* the browser fires a `click` event on `#themeBtn`.
3. *Callback:* the function registered with `addEventListener('click', ...)` runs and moves to the next theme in the `themes` array.
4. *DOM/CSS mutation:* it sets `data-theme` on `<body>`; the CSS variables for that theme apply, so colours change instantly.

Example 2: Language button
1. Click on `#langBtn` -> 2. `click` event -> 3. `setLanguage()` runs ->
4. It sets `lang` and `dir` on `<html>`, replaces every `data-i18n` text from the dictionary, and the layout flips to RTL.

Example 3: Avatar selector
1. Click on a photo chip -> 2. `click` event (caught on the container) -> 3. callback adds the `fade` class, waits for the transition, then sets `img.src` and `img.alt` ->
4. CSS transition fades the new photo in.

> TODO: rewrite the three examples above in your own words before submitting.

## Settings you can change
| What | Where |
|---|---|
| Form delivery | `FORM_ENDPOINT` in `script.js`: uses FormSubmit (send one test message, then click "Activate" in the email you receive). Replace with a Formspree URL if you prefer |
| Texts (EN / AR) | the `translations` object at the top of `script.js` |
| Project screenshots | replace `assets/images/projects/p0.svg ... p3.svg` (or use PNG/JPG and update the `src` in `index.html`) |
| Profile photos | `photos` array in `script.js` + `assets/images/` |
| Colours of the themes | top of `style.css` |

## Publish online (GitHub Pages)
1. Create a repository (for example `Personal-Portfolio`) and upload all files, keeping the folder structure.
2. Repository *Settings -> Pages -> Deploy from branch -> main / root*.
3. After publishing, change `og:image` in `index.html` to the full `https://...` URL of `assets/images/og-cover.jpg` so link previews work on LinkedIn.
