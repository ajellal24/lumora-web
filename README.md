# Lumora

Voice rooms, chat, gifts, DMs and a Discover feed. Static front-end (HTML/CSS/JS) on top of Supabase.

## Files
- `index.html`, `style.css`, `app.js`, `sw.js`, `manifest.json`, `icon-*.png`

## Supabase setup (run in SQL Editor, in this order)
1. `lumora_antispam.sql` – rate limits for chat, DMs and reports
2. `lumora_social.sql` – room covers, posts, likes, storage bucket `posts`
3. `lumora_extras.sql` – banners and comments
4. `lumora_polish.sql` – admin moderation of posts and comments
5. `lumora_v2.sql` – like/comment notifications and admin banner management
6. `lumora_v3.sql` – follower counts, comment deletion rights, moderation log

## Deploy (GitHub Pages)
Put all files in the repo root, enable Pages (main / root), and set Site URL / Redirect URLs in Supabase Auth.

## Configuration
- `CFG` at the top of `app.js`: Supabase URL and publishable key.
- `CFG.turn`: TURN servers for voice on mobile networks (needed on most 3G/4G).
- Voice diagnostics: open the site with `?debug=1` to show the connection line under the mic button.

## Notes
- Permissions, wallet, gifts and moderation are enforced by Supabase (RLS and functions), not by the front-end.
- Never commit secret/service-role keys.
