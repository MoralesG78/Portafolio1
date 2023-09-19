let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor:"<span style='color:#6395e0;'></span>"
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#6395e0;">Aprendiendo a desarrollar sitios web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
