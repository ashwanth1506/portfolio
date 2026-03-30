document.addEventListener("DOMContentLoaded", function() {
  const items1 = document.querySelectorAll('.item1');
  const items2 = document.querySelectorAll('.item2');
  const hint = document.querySelector('.hint');
  
  
const Tf = document.querySelector('.Tf');

  const fills = document.querySelectorAll(".progress-fill");

  function showProgress() {
    fills.forEach(fill => {
      const rect = fill.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        fill.style.width = fill.getAttribute("data-width");
      }
    });
  }

  window.addEventListener("scroll", showProgress);
  window.addEventListener("load", showProgress);


  const words = [
    "Full Stack Developer",
    "Competitive Programmer",
    "AI & Data Science Student",
    "Backend Enthusiast"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 60;
  const delay = 1200;

  const typedText = document.getElementById("typed-text");

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, delay);
      }
    } else {
      typedText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeEffect();



window.change = function(element){
  Tf.innerHTML = element + "✔";
}

 

  if (hint) {
    addHintListeners(items1);
    addHintListeners(items2);
  }
});
document.addEventListener("DOMContentLoaded", function() {

  const selectorMap = [
    { selector: '.grid-item1', target: '.about-page' },
    { selector: '.grid-item2', target: '.achievements-section' }, 
    { selector: '.grid-item3', target: '.Certifications' },
    { selector: '.grid-item4', target: '.contact-slide' },
    { selector: '.grid-item5', target: '.achievements-section' }
  ];

  selectorMap.forEach(item => {
    const btn = document.querySelector(item.selector);
    const section = document.querySelector(item.target);
    if (btn && section) {
      btn.addEventListener('click', function() {
        section.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
});