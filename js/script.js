import tabs from './modules/tabs';
import modal, {openModal} from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import form from './modules/forms';
import slider from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setInterval(() => openModal('.modal', modalTimerId), 5000);

    tabs('.tabheader__item','.tabcontent', '.tabheader__items','tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-02-20');
    cards();
    calc();
    form();
    slider({

    });

});

//setInterval
// const btns = document.querySelector('#callMe');
//
// function parrentGetResult() {
//     const timeID = setInterval(getResult, 1500);
//     let i = 0;
//
//     function getResult() {
//         if (i == 3) {
//             clearInterval(timeID);
//         } else {
//             console.log('hello');
//             i++;
//         }
//     }
// }
//
// btns.addEventListener("click", parrentGetResult);


//JSON  stringify/parse

// const obj = {
//     name: 'El',
//     age: 10,
//     parents: {
//         dad: 'Kh',
//         mom: 'Nig'
//     }
// };

// const clone = JSON.parse(JSON.stringify(obj));

// clone.parents.dad = 'Kha';

// const jsonFormat = JSON.stringify(obj);

// console.log(jsonFormat);
// console.log(clone);


// const log = function (a, b = 2) {
//     console.log(a * b);
// };
//
// log(3, 8);


// function summary(n) {
//     for (let i = 1; i <= n; i++ ){
//         sum += i;
//         console.log(sum);
//     }
//     // return n;
// }
// summary(4);


// console.log(sum);

// npx json-server db.json