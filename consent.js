// consent.js — ThinkSend cookie consent (vanilla, no deps)
(function () {
  const KEY = 'thinksend-consent'; // 'accepted' | 'declined'
  const EXP_DAYS = 180;

  // expose checker for analytics gating
  window.tsConsentGranted = function () {
    try { return localStorage.getItem(KEY) === 'accepted'; } catch { return false; }
  };

  function setCookie(name, value, days) {
    try {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
    } catch {}
  }

  function saveChoice(choice) {
    try { localStorage.setItem(KEY, choice); } catch {}
    setCookie('consent_status', choice, EXP_DAYS);
  }

  function alreadyDecided() {
    try { return !!localStorage.getItem(KEY); } catch { return false; }
  }

  function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-inner">
        <div class="cookie-text">
          This site uses cookies for basic functionality and optional analytics.
          See our <a href="/cookies">Cookies Policy</a>.
        </div>
        <div class="cookie-actions">
          <button id="cookie-decline" class="btn outline">Decline</button>
          <button id="cookie-accept" class="btn">Accept</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', () => {
      saveChoice('accepted');
      banner.remove();
      if (typeof window.tsInitAnalytics === 'function') window.tsInitAnalytics();
    });

    document.getElementById('cookie-decline').addEventListener('click', () => {
      saveChoice('declined');
      banner.remove();
    });
  }

  if (!alreadyDecided()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createBanner);
    } else {
      createBanner();
    }
  } else if (window.tsConsentGranted() && typeof window.tsInitAnalytics === 'fun
