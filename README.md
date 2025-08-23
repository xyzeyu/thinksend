
## 🚀 Deploy
- **Publish directory:** `site`
- **Build command:** _none_ (static)

## 🧾 Plans
- **Free**: Google search, YouTube search, Save locally (auto-save).
- **Pro**: Email drafts, Chat apps (Telegram/Messenger/WhatsApp) — recipient picked at send-time; Trello/Asana drafts; Calendar drafts (Google/Calendly). More tools coming.

## 📝 Forms
- **Newsletter:** `thinksend-updates` → `/success`
- **Waitlist (Free):** `thinksend-waitlist` → `/waitlist-success`
- **Pro Waitlist:** `thinksend-pro-waitlist` → `/pro-waitlist-success`

Netlify auto-discovers forms on deploy (must include `data-netlify="true"` and the hidden `form-name` input).

## 💾 Downloads
Serve installers directly from this site:
- Put files in `/site/downloads/` (e.g., `ThinkSend-Free-Setup.exe`).
- Link as `/downloads/ThinkSend-Free-Setup.exe` — no GitHub required.

## 🍪 Cookie Consent
- Logic in `consent.js`
- Choice stored in `localStorage["thinksend-consent"]` and `consent_status` cookie.
- To enable analytics only after consent:
  ```html
  <script>
    window.tsInitAnalytics = function () {
      // e.g., load GA4/Plausible here
    };
  </script>
  <script src="consent.js" defer></script>

  
---

### Final steps
1) Add your installer file to `site/downloads/` (e.g., `ThinkSend-Free-Setup.exe`).  
2) Commit & push to GitHub.  
3) Netlify auto-deploys (or drag-and-drop the `site/` folder).  
4) Test:
   - `/` comparison table + Pro waitlist button
   - `/pro-waitlist` → submit → `/pro-waitlist-success`
   - `/downloads/ThinkSend-Free-Setup.exe` → downloads the file directly

If you want separate **per-OS** download buttons to auto-hide when a file isn’t present, I can add a tiny `<script>` to probe file URLs and disable buttons dynamically.

