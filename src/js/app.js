/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from "./modules";
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = location.hostname === "localhost";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/
//isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-popup="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================

import Alpine from "alpinejs";
import mask from "@alpinejs/mask";
Alpine.plugin(mask);

window.Alpine = Alpine;
Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("[js-constructions-slider]")) {
    initConstructionsSlider();
  }

  if (document.querySelector("[js-partners-slider]")) {
    initPartnersSlider();
  }
});

const initConstructionsSlider = () => {
  const swiper = new Swiper("[js-constructions-slider]", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 0,
    },
    speed: 3000,
  });
};

const initPartnersSlider = () => {
  const swiper = new Swiper("[js-partners-slider]", {
    slidesPerView: 4,
    loop: true,
    navigation: {
      prevEl: "[js-partners-slider-left]",
      nextEl: "[js-partners-slider-right]",
    },
    autoplay: {
      delay: 1000,
    },
    speed: 3000,
  });
};
