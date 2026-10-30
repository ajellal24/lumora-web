# Lumora

Voice rooms, chat, gifts and direct messages. Static front-end (HTML/CSS/JS) on top of Supabase.

## Files
- `index.html` – page shell
- `style.css` – styles
- `app.js` – all app logic (Supabase client, rooms, chat, voice, DMs)
- `sw.js`, `manifest.json`, `icon-*.png` – installable PWA

## Deploy (GitHub Pages)
1. Put all files in the repo root and enable **Settings → Pages → main / root**.
2. In Supabase → **Authentication → URL Configuration**, set **Site URL** and **Redirect URLs** to the Pages URL.

## Configuration
- Supabase URL and publishable key: `CFG` at the top of `app.js`.
- Optional TURN servers for voice on mobile networks: `CFG.turn` in `app.js`.

## Notes
- Permissions, wallet, gifts and moderation must be enforced by Supabase (RLS and functions), not by this front-end.
- Never commit secret/service-role keys.
