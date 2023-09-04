import timer from "./modules/timer";
import hamburger from "./modules/hamburger";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // const hamburger = document.querySelector('.hamburger'),
    //   menu = document.querySelector('.menu'),
    //   close = document.querySelector('.menu__close');

    // hamburger.addEventListener('click', () => {
    //     menu.classList.add('active');
    // });



    //----------------------------------- Timer
    // Use the format "2023-09-04T15:30"

    timer('.main__countdown', '2023-11-02T00:00:00');


});


