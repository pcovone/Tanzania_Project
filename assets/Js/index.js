// const burger = document.querySelector(".burger");
// const navLinks = document.querySelector(".nav-links");

// burger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// /*Loading*/
// // Este código se encargará de ocultar el loader, el fondo y el texto cuando la página se cargue completamente
// window.addEventListener("load", function () {
//   // Selecciona el div del loader
//   var loaderWrapper = document.querySelector(".loader-wrapper");

//   // Selecciona el div del texto de bienvenida
//   var welcomeText = document.querySelector(".welcome-text");

//   // Cambia el tiempo de espera a, por ejemplo, 3000 milisegundos (3 segundos)
//   setTimeout(function () {
//     // Oculta el loader, el fondo y el texto de bienvenida
//     loaderWrapper.style.opacity = "0";
//     welcomeText.style.opacity = "0";

//     setTimeout(function () {
//       // Elimina el div del loader, el fondo y el texto de bienvenida
//       loaderWrapper.style.display = "none";
//       welcomeText.style.display = "none";
//     }, 1000); // Puedes ajustar el tiempo de animación aquí
//   }, 2000); // Cambia este valor al tiempo que desees en milisegundos
// });

//SLIDES
const sliders = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  //functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  //Event handler
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliders();

//-100%, 0%, 100%, 200%
