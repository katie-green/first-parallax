"use strict";

$(function () {
    let introSec = document.querySelector('#intro');
    let headerContent = document.querySelector('#header-content');

    function moveHeader() {
        console.log(`${introSec.getBoundingClientRect().top}`)
        window.requestAnimationFrame(moveHeader)
    }

    window.requestAnimationFrame(moveHeader)
})