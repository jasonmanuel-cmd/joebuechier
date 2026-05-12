// Minimal interactivity: smooth scroll and simple form handler
document.addEventListener('DOMContentLoaded',()=>{
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        const el=document.querySelector(href);
        if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});
      }}
    })
  })

  // Basic submit handling (replace with real endpoint)
  const form=document.querySelector('.lead-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      // In production, validate and POST to API
      alert('Thanks — your message was received. Joe will follow up shortly.');
      form.reset();
    })
  }
});
