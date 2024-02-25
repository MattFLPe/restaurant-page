import { pageLoad, menuLoad, aboutLoad } from './pageload.js';
import './style.css';

pageLoad();
console.log("Hello World!")
const contentPage = document.querySelector("#content")
const homeBtn = document.querySelector(".home")
homeBtn.addEventListener('click', function() {
    contentPage.innerHTML = ''
    pageLoad();
    return contentPage;
});


const menuBtn = document.querySelector(".menu")
menuBtn.addEventListener('click', function() {
    contentPage.innerHTML = ''
    menuLoad();
});


const aboutBtn = document.querySelector(".about")
aboutBtn.addEventListener('click', function() {
    contentPage.innerHTML = ''
    aboutLoad();
})