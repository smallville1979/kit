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
  document.body.insertBefore(nav, document.body.firstChild);
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

})();(function() {
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

  // === KILL OLD FORMS ===
  window.addEventListener("load", function() {
    var oldForms = document.querySelectorAll('form[action*="formspree"]');
    oldForms.forEach(function(f) { f.parentNode.removeChild(f); });
    var oldBar = document.getElementById("kit-email-bar-old");
    if (oldBar) oldBar.parentNode.removeChild(oldBar);
  });

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
  document.body.appendChild(emailBar);

  // populate dropdown after insert
  document.getElementById("kit-dropdown").innerHTML = dropHTML;

  // toggle menu
  document.getElementById("kit-menu-btn").addEventListener("click", function() {
    var dd = document.getElementById("kit-dropdown");
    dd.classList.toggle("open");
  });

})();(function() {
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

  // === KILL OLD FORMS ===
  window.addEventListener("load", function() {
    var oldForms = document.querySelectorAll('form[action*="formspree"]');
    oldForms.forEach(function(f) { f.parentNode.removeChild(f); });
    var oldBar = document.getElementById("kit-email-bar-old");
    if (oldBar) oldBar.parentNode.removeChild(oldBar);
  });

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
  document.body.appendChild(emailBar);

  // populate dropdown after insert
  document.getElementById("kit-dropdown").innerHTML = dropHTML;

  // toggle menu
  document.getElementById("kit-menu-btn").addEventListener("click", function() {
    var dd = document.getElementById("kit-dropdown");
    dd.classList.toggle("open");
  });

})();(function() {
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
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.appendChild(emailBar);

  // populate dropdown after insert
  document.getElementById("kit-dropdown").innerHTML = dropHTML;

  // toggle menu
  document.getElementById("kit-menu-btn").addEventListener("click", function() {
    var dd = document.getElementById("kit-dropdown");
    dd.classList.toggle("open");
  });

})();(function() {
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

  // figure out which site we're on so we don't link to ourselves
  var current = window.location.pathname.split("/")[1] || "";

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
    '#kit-email-bar { background:#e94560; padding:15px; text-align:center; font-family:Arial,sans-serif; }' +
    '#kit-email-bar input { padding:8px 12px; border:none; border-radius:4px; width:220px; margin-right:8px; }' +
    '#kit-email-bar button { padding:8px 16px; background:#1a1a2e; color:#fff; border:none; border-radius:4px; cursor:pointer; font-weight:bold; }' +
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
  emailBar.innerHTML = '<p>Get free money tips straight to your inbox</p>' +
    '<input type="email" id="kit-email" placeholder="your@email.com">' +
    '<button id="kit-email-btn">Subscribe</button>';

  // === INJECT ===
  document.head.appendChild(style);
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.appendChild(emailBar);

  // populate dropdown after insert
  document.getElementById("kit-dropdown").innerHTML = dropHTML;

  // toggle menu
  document.getElementById("kit-menu-btn").addEventListener("click", function() {
    var dd = document.getElementById("kit-dropdown");
    dd.classList.toggle("open");
  });

  // email handler (placeholder - wire to your service later)
  document.getElementById("kit-email-btn").addEventListener("click", function() {
    var email = document.getElementById("kit-email").value;
    if (email && email.indexOf("@") > -1) {
      alert("Nice one! " + email + " added. (Wire this to ConvertKit/Mailchimp later)");
    } else {
      alert("Enter a real email mate");
    }
  });

})();
