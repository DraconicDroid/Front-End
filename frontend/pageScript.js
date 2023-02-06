let subNavButtons = document.querySelectorAll('.navbutton, .menu-toggle');
let control = document.querySelector('.header');

control.addEventListener('click',togglenav);

function togglenav(event) {
  subNavButtons.forEach(function(element){
    if (event.target !== element) {
      element.classList.remove('open');
      element.setAttribute('aria-expanded', 'false');
    }
    if (event.target === element) {
      element.classList.toggle('menu');
      var ariacheck = element.getAttribute('aria-expanded');
      if (ariacheck === 'true') {
        element.setAttribute('aria-expanded', 'false');
      }
      else {
        element.setAttribute('aria-expanded', 'true');
      }
    }
  });
  const btnclicked = event.target;
  btnclicked.classList.toggle('open');
}

/*
when the navbutton is clicked
look through all the other navbuttons
and check them for the open css class and remove it
*/