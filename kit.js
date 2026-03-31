(function() {
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
      ["bank-of-mum-and-dad", "Bank of Mum & Dad"],
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

  // === NAV BAR ===
  var nav = document.createElement("div");
  nav.id = "kit-nav";
  nav.innerHTML = '<div id="kit-nav-inner">' +
    '<span id="kit-brand">💷 UK Money Guides</span>' +
    '<button id="kit-menu-btn">☰ More Guides</button>' +
    '</div>' +
    '<div id="kit-dropdown" style="display:none;"></div>';

  // === STYLES ===
  var style = document.createElement("style");
  style.textContent = '' +
    '#kit-nav { background:#1a1a2e; padding:10px 15px; font-family:Arial,sans-serif; position:sticky; top:0; z-index:99999; }' +
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
    '#kit-bookmark-bar { background:#1a1a2e; border-top:2px solid #e94560; padding:15px; text-align:center; font-family:Arial,sans-serif; }' +
    '#kit-bookmark-bar p { color:#fff; margin:0 0 10px; font-size:15px; font-weight:bold; }' +
    '.kit-bm-btns { display:flex; flex-wrap:wrap; justify-content:center; gap:10px; }' +
    '.kit-bm-btns button { background:#e94560; color:#fff; border:none; padding:10px 20px; border-radius:4px; cursor:pointer; font-weight:bold; font-size:14px; }' +
    '.kit-bm-btns a { background:#25D366; color:#fff; padding:10px 20px; border-radius:4px; text-decoration:none; font-weight:bold; font-size:14px; display:inline-block; }' +
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

  // === BOOKMARK BAR ===
  var bookmarkBar = document.createElement("div");
  bookmarkBar.id = "kit-bookmark-bar";
  bookmarkBar.innerHTML = '<p>📌 Bookmark this — you\'ll need it again</p>' +
    '<div class="kit-bm-btns">' +
    '<button onclick="alert(\'Press Ctrl+D (or Cmd+D on Mac) to save this page!\')">⭐ Save This Page</button>' +
    '<a href="https://wa.me/?text=This%20helped%20me%20out%2C%20might%20help%20you%20too%3A%20' + encodeURIComponent(currentURL) + '">💬 Send to a Mate</a>' +
    '</div>';

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
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.appendChild(bookmarkBar);
  document.body.appendChild(emailBar);

  // populate dropdown after insert
  document.getElementById("kit-dropdown").innerHTML = dropHTML;

  // toggle menu
  document.getElementById("kit-menu-btn").addEventListener("click", function() {
    var dd = document.getElementById("kit-dropdown");
    dd.classList.toggle("open");
  });

  // === NUKE ALL DUPLICATE FORMS ON PAGE LOAD ===
  window.addEventListener("load", function() {
    var allForms = document.querySelectorAll("form");
    allForms.forEach(function(f) {
      if (f.closest("#kit-email-bar") === null) {
        f.parentNode.removeChild(f);
      }
    });
    var allScripts = document.querySelectorAll('script[src*="eocampaign"]');
    allScripts.forEach(function(s) {
      if (s.closest("#kit-email-bar") === null) {
        s.parentNode.removeChild(s);
      }
    });
    var allEoForms = document.querySelectorAll('[data-form]');
    allEoForms.forEach(function(f) {
      if (f.closest("#kit-email-bar") === null) {
        f.parentNode.removeChild(f);
      }
    });
  });

})();
