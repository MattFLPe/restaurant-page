import { pageLoad, menuLoad } from './pageload.js';
import './style.css';


console.log("Hello World!")
const homeBtn = document.querySelector(".home")
homeBtn.addEventListener('click', function() {
    const contentPage = document.querySelector("#content")
    pageLoad();
    return contentPage;
});


const menuBtn = document.querySelector(".menu")
menuBtn.addEventListener('click', function() {
    const contentPage = document.querySelector("#content");
    contentPage.innerHTML = ''
   menuLoad();

});


const aboutBtn = document.querySelector(".about")
aboutBtn.addEventListener('click', function() {

})