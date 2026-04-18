(function() {
  if (document.getElementById("kit-nav")) return;

  var base = "https://smallville1979.github.io/";
  var current = window.location.pathname.split("/")[1] || "";
  var currentURL = window.location.href;

  var categories = {
    "Benefits & Help": [
      ["benefits-guide", "Benefits Guide"],
      ["claimit", "Claim It"],
      ["disability-guide", "Disability Guide"],
      ["emergency", "Emergency Help"],
      ["free-stuff", "Free Stuff"],
      ["help-now", "Help Now"],
      ["mental-health", "Mental Health Help"],
      ["need-food", "Need Food"],
      ["sausage-benefits", "Sausage Benefits"],
      ["social-tariffs", "Social Tariffs"]
    ],
    "Money & Debt": [
      ["skintbutsorted", "Home"],
      ["broke-britain", "Broke Britain"],
      ["no-loans", "No Loans"],
      ["smart-broke", "Smart Broke"],
      ["bank-of-dad", "Bank of Mum & Dad"],
      ["break-the-cycle", "Break the Cycle"],
      ["loan-scam-graphic", "Loan Scam Alert"],
      ["complaints-guide", "Complaints & Compo"],
      ["matched-betting", "Matched Betting"],
      ["cut-bills", "Cut Your Bills"],
      ["eatcheap", "Eat Cheap"],
      ["payrise", "Ask For A Pay Rise"],
      ["amazon-reviews", "Amazon Review Schemes"],
      ["credit-guide", "Fix Your Credit File"]
    ],
    "Free Stuff & Hacks": [
      ["free-banking-dollars", "Free Banking"],
      ["free-drugs", "Free Prescriptions"],
      ["free-travel", "Free Travel"],
      ["free-nudes", "Free Nudes"],
      ["petrol-hacks", "Petrol Hacks"],
      ["lloyds-50", "Lloyds 50"],
      ["referrals", "Referrals"],
      ["kill-subscriptions", "Kill Subscriptions"],
      ["free-streaming", "Free Streaming"],
      ["free-ai-tools", "Free AI Tools"]
    ],
    "Health & Wellbeing": [
      ["health-fitness", "Health & Fitness Cheap"]
    ],
    "Work & Study": [
      ["uk-jobs-guide", "UK Jobs Guide"],
      ["jobs-abroad", "Jobs Abroad"],
      ["escape-uk", "Escape the UK"],
      ["student-guide", "Student Guide"],
      ["teacher", "Teacher"],
      ["live-in-jobs", "Live-In Jobs"],
      ["back2work", "Back2Work & Training"]
    ]
  };

  // === STYLES ===
  var style = document.createElement("style");
  style.textContent =
    '#kit-hour-bar{background:#0d0d0d;border-bottom:2px solid #f5c842;padding:10px 15px;text-align:center;font-family:Arial,sans-serif;font-size:13px;color:#e0c96a;line-height:1.5;}' +
    '#kit-hour-bar strong{color:#f5c842;}' +
    '#kit-bookmark-bar{background:#e94560;padding:9px 15px;text-align:center;font-family:Arial,sans-serif;font-size:13px;color:#fff;display:flex;justify-content:center;align-items:center;gap:12px;flex-wrap:wrap;}' +
    '#kit-bookmark-bar span{color:#fff;}' +
    '#kit-bookmark-bar a{background:#fff;color:#e94560;padding:5px 13px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:13px;}' +
    '#kit-bookmark-bar a:hover{background:#ffdddd;}' +
    '#kit-nav{background:#1a1a2e;padding:10px 15px;font-family:Arial,sans-serif;}' +
    '#kit-nav-inner{display:flex;justify-content:space-between;align-items:center;max-width:960px;margin:0 auto;}' +
    '#kit-brand{color:#e94560;font-weight:bold;font-size:17px;text-decoration:none;cursor:pointer;}' +
    '#kit-nav-right{display:flex;gap:8px;align-items:center;}' +
    '#kit-menu-btn{background:#e94560;color:#fff;border:none;padding:8px 16px;border-radius:5px;cursor:pointer;font-size:14px;font-weight:bold;}' +
    '#kit-home-btn{background:#0f3460;color:#fff;border:none;padding:8px 14px;border-radius:5px;cursor:pointer;font-size:13px;text-decoration:none;display:inline-block;}' +
    '#kit--btn{background:#f5c518;color:#000;padding:8px 14px;border-radius:5px;font-size:13px;font-weight:bold;text-decoration:none;display:inline-block;}' +
    '#kit-home-btn:hover,#kit-menu-btn:hover,#kit--btn:hover{opacity:0.85;}' +
    '#kit-dropdown{background:#16213e;padding:0 15px;display:none;}' +
    '#kit-dropdown.open{display:block!important;padding:15px;}' +
    '.kit-cat{color:#e94560;font-weight:bold;margin:12px 0 6px;font-size:13px;letter-spacing:1px;text-transform:uppercase;}' +
    '.kit-links{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:8px;}' +
    '.kit-links a{color:#fff;background:#0f3460;padding:6px 12px;border-radius:4px;text-decoration:none;font-size:13px;}' +
    '.kit-links a:hover{background:#e94560;}' +
    '.kit-links a.kit-current{background:#e94560;pointer-events:none;}' +
    '.kit-links a.kit-escape{background:#1a4d1a;}' +
    '.kit-links a.kit-escape:hover{background:#e94560;}' +
    '#kit-mate-bar{background:#16213e;border-top:2px solid #e94560;border-bottom:2px solid #e94560;padding:14px 15px;text-align:center;font-family:Arial,sans-serif;}' +
    '#kit-mate-bar p{color:#ccc;font-size:14px;margin:0 0 10px;}' +
    '#kit-mate-bar strong{color:#fff;}' +
    '#kit-mate-bar .mate-btns{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;}' +
    '#kit-mate-bar .mate-btns a{padding:9px 18px;border-radius:5px;text-decoration:none;font-weight:bold;font-size:14px;}' +
    '#kit-mate-bar .btn-wa{background:#25D366;color:#fff;}' +
    '#kit-mate-bar .btn-sms{background:#e94560;color:#fff;}' +
    '#kit-mate-bar .btn-copy{background:#0f3460;color:#fff;cursor:pointer;border:none;font-size:14px;font-weight:bold;border-radius:5px;padding:9px 18px;}' +
    '#kit-kofi-bar{background:#1a1a2e;padding:20px 15px;text-align:center;font-family:Arial,sans-serif;border-top:3px solid #e94560;}' +
    '#kit-kofi-bar p{color:#ccc;margin:0 0 6px;font-size:14px;}' +
    '#kit-kofi-bar .kofi-sub{color:#888;font-size:13px;margin:0 0 12px;max-width:520px;display:block;margin-left:auto;margin-right:auto;}' +
    '#kit-kofi-bar a{display:inline-block;background:#FF5E5B;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:15px;}' +
    '#kit-kofi-bar a:hover{background:#e04a47;}' +
    '#kit-email-bar{background:#e94560;padding:15px;text-align:center;font-family:Arial,sans-serif;}' +
    '#kit-email-bar p{color:#fff;margin:0 0 8px;font-weight:bold;font-size:15px;}' +
    '@media(max-width:500px){#kit-mate-bar .mate-btns a,#kit-mate-bar .btn-copy{font-size:12px;padding:7px 12px;}}';

  // === HOUR BAR ===
  var hourBar = document.createElement("div");
  hourBar.id = "kit-hour-bar";
  hourBar.innerHTML = '⏱️ <strong>This site takes 1 hour to fully read — click every link, view every page.</strong> Free  that actually works. Don\'t skim it.';

  // === BOOKMARK BAR ===
  var bookmarkBar = document.createElement("div");
  bookmarkBar.id = "kit-bookmark-bar";
  bookmarkBar.innerHTML =
    '<span>📌 Bookmark — <strong>Ctrl+D</strong> (Mac: Cmd+D)</span>' +
    '<a href="https://wa.me/?text=This%20site%20ed%20me%20-%20read%20it%3A%20' + encodeURIComponent(currentURL) + '" target="_blank" rel="noopener">WhatsApp a mate →</a>';

  // === NAV BAR ===
  var nav = document.createElement("div");
  nav.id = "kit-nav";
  nav.innerHTML =
    '<div id="kit-nav-inner">' +
    '<span id="kit-brand" onclick="window.location=\'' + base + 'skintbutsorted/\'">🇬🇧 Skint But Sorted</span>' +
    '<div id="kit-nav-right">' +
    '<a href="' + base + 'skintbutsorted/" id="kit-home-btn">🏠 Home</a>' +
    '<a href="https://smallville1979.github.io/help/" class="kit-btn">❓ Help</a>' +
    '<button id="kit-menu-btn">All Guides ▾</button>' +
    '</div>' +
    '</div>' +
    '<div id="kit-dropdown"></div>';

  // === BUILD DROPDOWN ===
  var dropHTML = "";
  for (var cat in categories) {
    dropHTML += '<div class="kit-cat">' + cat + '</div><div class="kit-links">';
    for (var i = 0; i < categories[cat].length; i++) {
      var slug = categories[cat][i][0];
      var label = categories[cat][i][1];
      var isCurrent = (slug === current);
      var isEscape = (slug === "escape-uk" || slug === "jobs-abroad");
      var cls = isCurrent ? ' class="kit-current"' : (isEscape ? ' class="kit-escape"' : '');
      dropHTML += '<a href="' + base + slug + '/"' + cls + '>' + label + '</a>';
    }
    dropHTML += '</div>';
  }

  // === TELL A MATE BAR ===
  var mateBar = document.createElement("div");
  mateBar.id = "kit-mate-bar";
  mateBar.innerHTML =
    '<p><strong>🤝 Know someone struggling?</strong> Mate asking for a loan? Someone moaning about bills? Parents stressed? Send them this — it\'s free and it actually helps.</p>' +
    '<div class="mate-btns">' +
    '<a class="btn-wa" href="https://wa.me/?text=This%20site%20is%20free%20and%20actually%20helps%20with%20money%2C%20benefits%2C%20jobs%20and%20bills%3A%20' + encodeURIComponent(currentURL) + '" target="_blank" rel="noopener">📱 WhatsApp</a>' +
    '<a class="btn-sms" href="sms:?body=This%20helped%20me%20with%20money%20and%20bills%20-%20free%3A%20' + encodeURIComponent(currentURL) + '">💬 Text It</a>' +
    '<button class="btn-copy" id="kit-copy-btn">📋 Copy Link</button>' +
    '</div>';

  // === KO-FI BAR ===
  var kofiBar = document.createElement("div");
  kofiBar.id = "kit-kofi-bar";
  kofiBar.innerHTML =
    '<p><strong>☕ Free site. No ads. No sponsors. Built by Tom in Newcastle.</strong></p>' +
    '<span class="kofi-sub">If this helped you — or someone you sent it to — a coffee keeps it going. No loans pushed here. Just real help.</span>' +
    '<a href="https://ko-fi.com/tomgallagher" target="_blank" rel="noopener">☕ Buy Tom a Coffee on Ko-fi</a>';

  // === EMAIL BAR ===
  var emailBar = document.createElement("div");
  emailBar.id = "kit-email-bar";
  emailBar.innerHTML = '<p>📬 Free money tips straight to your inbox</p>';
  var eoScript = document.createElement("script");
  eoScript.src = "https://eocampaign1.com/form/9f313a72-2d30-11f1-956a-ebc545caee7c.js";
  eoScript.setAttribute("data-form", "9f313a72-2d30-11f1-956a-ebc545caee7c");
  eoScript.async = true;
  emailBar.appendChild(eoScript);

  // === INJECT ===
  document.head.appendChild(style);

  var existingNav = document.querySelector("nav");
  if (existingNav) existingNav.parentNode.removeChild(existingNav);

  // Top
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.insertBefore(bookmarkBar, document.body.firstChild);
  document.body.insertBefore(hourBar, document.body.firstChild);

  // Bottom
  document.body.appendChild(mateBar);
  document.body.appendChild(kofiBar);
  document.body.appendChild(emailBar);

  // Dropdown
  document.getElementById("kit-dropdown").innerHTML = dropHTML;

  // Toggle dropdown
  document.getElementById("kit-menu-btn").addEventListener("click", function() {
    document.getElementById("kit-dropdown").classList.toggle("open");
  });

  // Close on outside click
  document.addEventListener("click", function(e) {
    var dd = document.getElementById("kit-dropdown");
    var btn = document.getElementById("kit-menu-btn");
    if (dd && btn && !dd.contains(e.target) && !btn.contains(e.target)) {
      dd.classList.remove("open");
    }
  });

  // Copy link button
  document.getElementById("kit-copy-btn").addEventListener("click", function() {
    var btn = this;
    try {
      var t = document.createElement("textarea");
      t.value = currentURL;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
      btn.textContent = "✓ Copied!";
      setTimeout(function() { btn.textContent = "📋 Copy Link"; }, 2000);
    } catch(e) {}
  });

  // === NUKE DUPLICATE EO FORMS ===
  window.addEventListener("load", function() {
    var allForms = document.querySelectorAll("form");
    allForms.forEach(function(f) {
      if (f.closest("#kit-email-bar") === null) { f.parentNode.removeChild(f); }
    });
    var allEoScripts = document.querySelectorAll('script[src*="eocampaign"]');
    allEoScripts.forEach(function(s) {
      if (s.closest("#kit-email-bar") === null) { s.parentNode.removeChild(s); }
    });
    var allEoForms = document.querySelectorAll('[data-form]');
    allEoForms.forEach(function(f) {
      if (f.closest("#kit-email-bar") === null) { f.parentNode.removeChild(f); }
    });
  });

})();
