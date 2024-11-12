let experience = 0;
const experienceDisplay = document.getElementById('experience');
const tyson = document.getElementById('tyson');
const punchingBag = document.getElementById('punching-bag');
const cheerSound = document.getElementById('cheer-sound');
const punch = document.getElementById('punch');
const message = document.getElementById('message');
upgradeTyson();
// Смена уровня Тайсона
function upgradeTyson() {
  // Удаление старого текста subtext, если он существует
  let existingSubtext = document.getElementById('subtext');
  if (existingSubtext) {
    existingSubtext.remove();
  }

  if (experience >= 30 && experience < 60) {
    tyson.style.background = "url('img/prime.png') no-repeat center/cover";
    message.textContent = 'Mike Tyson';
    // Добавление текста ниже
    message.insertAdjacentHTML('afterend', '<div id="subtext">The peak form of the legendary Mike, but I would still train to be sure.</div>');
    document.getElementById('subtext').style.margin = '30px 0 0 0';
  } else if (experience >= 60) {
    tyson.style.background = "url('img/iron.png') no-repeat center/cover";
    message.textContent = 'Iron Mike';
    cheerSound.play();
    // Добавление текста ниже
    message.insertAdjacentHTML(`afterend`, `<div id="subtext">That's all! Mike Tyson is finaly ready to smash that naughty boy. Get ready for it!</div>`);
    document.getElementById('subtext').style.margin = '30px 0 0 0';
  } else {
    tyson.style.background = "url('img/skinny.png') no-repeat center/cover"; // Убедитесь, что начальный фон сброшен
    message.textContent = 'Skinny Mike';
    // Добавление текста ниже
    message.insertAdjacentHTML('afterend', '<div id="subtext">Now he is too weak to fight with Paul, but you can help him. Just beat the bag!</div>');
    document.getElementById('subtext').style.margin = '30px 0 0 0';
  }
}

// Обработчик кликов по груше
punchingBag.addEventListener('click', () => {
  experience += 10;
  punch.play();
  experienceDisplay.textContent = experience;
  punchingBag.style.background = "url('img/bag1.png') no-repeat center/cover";

  setTimeout(() => {
    punchingBag.style.background = "url('img/bag1.png') no-repeat center/cover";
  }, 100);
  
  upgradeTyson();
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}