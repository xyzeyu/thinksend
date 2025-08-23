
## 🚀 Deploy
- **Publish directory:** `site`
- **Build command:** _none_ (static)

## 🧾 Plans
- **Free**: Google search, YouTube search, Save locally (auto-save).
- **Pro**: Email drafts, Chat apps (Telegram/Messenger/WhatsApp), Trello/Asana drafts, Calendar drafts (Google/Calendly). More tools coming.

## 📝 Forms
- **Newsletter:** `thinksend-updates` → `/success`
- **Waitlist (Free):** `thinksend-waitlist` → `/waitlist-success`
- **Pro Waitlist:** `thinksend-pro-waitlist` → `/pro-waitlist-success`

Netlify auto-discovers forms on deploy (must include `data-netlify="true"` and the hidden `form-name` input). Success pages are routed via `netlify.toml`.

## 💾 Download
Windows installer is served from GitHub Releases:

- https://github.com/xyzeyu/thinksend/releases/download/v1.0.1/ThinkSend-Free-Setup-1.0.1.exe

## 🍪 Cookie Consent
Logic in `consent.js`. To load analytics only after consent:

```html
<script>
  window.tsInitAnalytics = function () {
    // add analytics loader here
  };
</script>
<script src="consent.js" defer></script>
