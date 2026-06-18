# Grossmann Training Preview Workflow

Use this setup while working on the site.

## Recommended system

- `Cursor` for editing code
- `Terminal` for running the Next.js server
- `Chrome` for reviewing the real result
- `Screenshots` for feedback and design audit

Do not rely on the Cursor preview pane as the primary review tool.

## Start local preview

```bash
cd grossmann-training-v3
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Commands

```bash
npm run dev
npm run build
```

## Mobile review

In Chrome:

1. Open `http://localhost:3000`
2. Press `Cmd + Shift + I`
3. Press `Cmd + Shift + M`
4. Choose `iPhone 14` or `iPhone SE`
5. Use `Cmd + Shift + P`
6. Run `Capture full size screenshot`

## Suggested review loop

1. Run `npm run dev`
2. Review desktop in Chrome
3. Review mobile in Chrome device mode
4. Take screenshots
5. Share screenshots for the next refinement pass

## Contact page note

The current project includes a dedicated `/kontakt` page intended as the later home for the Zoho embed.
