// header menu toggle & simple utilities
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.menu-toggle');
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.primary-nav');

  btn && btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('menu-open');
  });

  // set footer years
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });
});

// Contact form: open mailto with filled details (simple, discreet)
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Enquiry from The Gohil Agency website — ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
  window.location.href = `mailto:thegohilagency@outlook.com?subject=${subject}&body=${body}`;
  return false;
}
