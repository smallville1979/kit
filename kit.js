(function() {

  if (document.getElementById("kit-nav")) return;

  var base = "https://smallville1979.github.io/";

  var categories = {
    "Benefits & Help": [
      ["benefits-guide", "Benefits Guide"],
      ["claimit", "Claim It"],
      ["disability-guide", "Disability Guide"],
      ["emergency", "Emergency Help"],
      ["help-now", "Help Now"],
      ["need-food", "Need Food"],
      ["sausage-benefits", "Sausage Benefits"]
    ],
    "Money & Debt": [
      ["skint", "Skint"],
      ["broke-britain", "Broke Britain"],
      ["no-loans", "No Loans"],
      ["bank-of-dad", "Bank of Mum & Dad"],
      ["break-the-cycle", "Break the Cycle"],
      ["loan-scam-graphic", "Loan Scam Alert"]
    ],
    "Free Stuff & Hacks": [
      ["free-banking-dollars", "Free Banking Dollars"],
      ["free-drugs", "Free Drugs"],
      ["free-travel", "Free Travel"],
      ["free-nudes", "Free Nudes"],
      ["petrol-hacks", "Petrol Hacks"],
      ["lloyds-50", "Lloyds 50"],
      ["referrals", "Referrals"]
    ],
    "Work & Study": [
      ["uk-jobs-guide", "UK Jobs Guide"],
      ["student-guide", "Student Guide"],
      ["teacher", "Teacher"]
    ]
  };

  var current = window.location.pathname.split("/")[1] || "";
  var currentURL = window.location.href;

  // === BOOKMARK BAR ===
  var bookmarkBar = document.createElement("div");
  bookmarkBar.id = "kit-bookmark-bar";
  bookmarkBar.innerHTML =
    '<span>📌 Bookmark this — <strong>Ctrl+D</strong> (Mac: Cmd+D)</span>' +
    '<a href="https://wa.me/?text=This%20helped%20me%20out%3A%20' + encodeURIComponent(currentURL) + '">💬 Send to a mate on WhatsApp</a>';

  // === NAV BAR ===
  var nav = document.createElement("div");
  nav.id = "kit-nav";
  nav.innerHTML =
    '<div id="kit-nav-inner">' +
      '<span id="kit-brand">💷 UK Money Guides</span>' +
      '<button id="kit-menu-btn">☰ More Guides</button>' +
    '</div>' +
    '<div id="kit-dropdown" style="display:none;"></div>';

  // === STYLES ===
  var style = document.createElement("style");
  style.textContent =
    '#kit-bookmark-bar { background:#e94560; padding:10px 15px; text-align:center; font-family:Arial,sans-serif; font-size:14px; color:#fff; display:flex; justify-content:center; align-items:center; gap:20px; flex-wrap:wrap; }' +
    '#kit-bookmark-bar span { color:#fff; }' +
    '#kit-bookmark-bar a { background:#fff; color:#e94560; padding:6px 14px; border-radius:4px; text-decoration:none; font-weight:bold; font-size:14px; }' +
    '#kit-bookmark-bar a:hover { background:#ffdddd; }' +
    '#kit-nav { background:#1a1a2e; padding:10px 15px; font-family:Arial,sans-serif; }' +
    '#kit-nav-inner { display:flex; justify-content:space-between; align-items:center; max-width:900px; margin:0 auto; }' +
    '#kit-brand { color:#e94560; font-weight:bold; font-size:18px; }' +
    '#kit-menu-btn { background:#e94560; color:#fff; border:none; padding:8px 16px; border-radius:5px; cursor:pointer; font-size:14px; }' +
    '#kit-dropdown { background:#16213e; max-width:900px; margin:0 auto; padding:0 15px; }' +
    '#kit-dropdown.open { display:block!important; padding:15px; }' +
    '.kit-cat { color:#e94560; font-weight:bold; margin:10px 0 5px; font-size:14px; }' +
    '.kit-links { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px; }' +
    '.kit-links a { color:#fff; background:#0f3460; padding:6px 12px; border-radius:4px; text-decoration:none; font-size:13px; }' +
    '.kit-links a:hover { background:#e94560; }' +
    '.kit-links a.kit-current { background:#e94560; pointer-events:none; }' +
    '#kit-email-bar { background:#e94560; padding:15px; text-align:center; font-family:Arial,sans-serif; }' +
    '#kit-email-bar p { color:#fff; margin:0 0 8px; font-weight:bold; font-size:16px; }';

  // === BUILD DROPDOWN LINKS ===
  var dropHTML = "";
  for (var cat in categories) {
    dropHTML += '<div class="kit-cat">' + cat + '</div><div class="kit-links">';
    for (var i = 0; i < categories[cat].length; i++) {
      var slug = categories[cat][i][0];
      var label = categories[cat][i][1];
      var cls = (slug === current) ? ' class="kit-current"' : '';
      dropHTML += '<a href="' + base + slug + '/"' + cls + '>' + label + '</a>';
    }
    dropHTML += '</div>';
  }

  // === EMAIL BAR ===
  var emailBar = document.createElement("div");
  emailBar.id = "kit-email-bar";
  emailBar.innerHTML = '<p>Get free money tips straight to your inbox</p>';
  var eoScript = document.createElement("script");
  eoScript.src = "https://eocampaign1.com/form/9f313a72-2d30-11f1-956a-ebc545caee7c.js";
  eoScript.setAttribute("data-form", "9f313a72-2d30-11f1-956a-ebc545caee7c");
  eoScript.async = true;
  emailBar.appendChild(eoScript);

  // === INJECT ===
  document.head.appendChild(style);

  var existingNav = document.querySelector("nav");
  if (existingNav) existingNav.parentNode.removeChild(existingNav);

  document.body.insertBefore(nav, document.body.firstChild);
  document.body.insertBefore(bookmarkBar, document.body.firstChild);
  document.body.appendChild(emailBar);

  document.getElementById("kit-dropdown").innerHTML = dropHTML;

  document.getElementById("kit-menu-btn").addEventListener("click", function() {
    var dd = document.getElementById("kit-dropdown");
    dd.classList.toggle("open");
  });

  // === NUKE DUPLICATE FORMS ===
  window.addEventListener("load", function() {
    var allForms = document.querySelectorAll("form");
    allForms.forEach(function(f) {
      if (f.closest("#kit-email-bar") === null) { f.parentNode.removeChild(f); }
    });
    var allScripts = document.querySelectorAll('script[src*="eocampaign"]');
    allScripts.forEach(function(s) {
      if (s.closest("#kit-email-bar") === null) { s.parentNode.removeChild(s); }
    });
    var allEoForms = document.querySelectorAll('[data-form]');
    allEoForms.forEach(function(f) {
      if (f.closest("#kit-email-bar") === null) { f.parentNode.removeChild(f); }
    });
  });

})();
