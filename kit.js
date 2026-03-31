document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('get-the-kit')) return;
  var body = document.body;
  var section = document.createElement('div');
  section.innerHTML = '<section id="get-the-kit" style="background:#111;border:2px solid #f5c842;border-radius:6px;padding:32px 24px;margin:40px auto;max-width:520px;font-family:sans-serif;"><h2 style="color:#f5c842;margin:0 0 8px;font-size:22px;">Get the 2am Crisis Kit — Free</h2><p style="color:#ccc;margin:0 0 20px;font-size:15px;">Real UK bonuses you can claim today. No loans. No bullshit.</p><form action="https://formspree.io/f/mkopbppa" method="POST" id="crisis-form"><input type="hidden" name="_subject" value="New crisis kit signup" /><input type="text" name="name" placeholder="First name" required style="display:block;width:100%;padding:12px;margin-bottom:10px;background:#1a1a1a;border:1px solid #333;color:#fff;border-radius:4px;font-size:15px;box-sizing:border-box;" /><input type="email" name="email" placeholder="Your email" required style="display:block;width:100%;padding:12px;margin-bottom:14px;background:#1a1a1a;border:1px solid #333;color:#fff;border-radius:4px;font-size:15px;box-sizing:border-box;" /><button type="submit" style="width:100%;padding:14px;background:#f5c842;color:#000;border:none;border-radius:4px;font-size:16px;font-weight:700;cursor:pointer;letter-spacing:1px;">SEND ME THE KIT</button></form><p id="form-thanks" style="display:none;color:#4ade80;margin-top:16px;text-align:center;font-size:15px;">On its way. Check your email in 2 mins.</p></section>';
  body.appendChild(section.firstChild);
  document.getElementById('crisis-form').addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(this.action, {method:'POST', body:new FormData(this), headers:{'Accept':'application/json'}})
    .then(function(r) {
      if (r.ok) {
        document.getElementById('crisis-form').style.display = 'none';
        document.getElementById('form-thanks').style.display = 'block';
      }
    });
  });
});
