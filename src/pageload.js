import icon from './icon.jpg';
import pepperoni from './pepperoni.jpg'
import margherita from './margherita.jpg'
import cheese from './cheese.jpg'
import california from './california.jpg'

export function pageLoad() {

    const element = document.getElementById("content");

    const Fact = document.createElement("h4");
    const contentFact = document.createTextNode("Since 1265");
    Fact.appendChild(contentFact);
    element.appendChild(Fact);
    Fact.style.marginBottom = "20px";
    
    const myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);
    myIcon.style.width = '200px';
    myIcon.style.height = '200px';
    myIcon.style.marginBottom = '10px'
    myIcon.style.marginTop = '20px'
    myIcon.style.border = '1px solid rgba(66, 44, 19)';
    myIcon.style.borderRadius = '50%'

    const title = document.createElement("h1");
    const contentTitle = document.createTextNode("Alighieri's Pizzeria");
    title.appendChild(contentTitle);
    element.appendChild(title);
    title.style.marginBottom = "20px";

    
    const para = document.createElement('p');
    const paraContent = document.createTextNode(`Welcome to Alighieri's – where passion meets flavor! 
    Step into a world of delicious indulgence, where every slice tells a story of craftsmanship and love for the art of pizza-making!`);
    para.appendChild(paraContent);
    element.appendChild(para);
    para.style.width = "500px";
    para.style.margin = "0 auto";

}


export function menuLoad() {
    const element = document.querySelector("#content")

    const title = document.createElement("h1");
    const contentTitle = document.createTextNode("Alighieri's Pizzeria");
    title.appendChild(contentTitle);
    element.appendChild(title);
    title.style.marginBottom = "20px"

    const subTitle = document.createElement("h3");
    const contentSub = document.createTextNode("Menu");
    subTitle.appendChild(contentSub);
    element.appendChild(subTitle);
    subTitle.style.marginBottom = "20px"

    const Pepperoni = new Image();
    Pepperoni.src = pepperoni;
    element.appendChild(Pepperoni)
    Pepperoni.style.height = "150px"
    Pepperoni.style.width = "150px"
    Pepperoni.style.border = "1px solid rgb(66, 44, 19)"
    Pepperoni.style.borderRadius = '50%'
    Pepperoni.style.marginBottom = '10px'
    const firstItem = document.createElement("p")
    const firstContent = document.createTextNode("Pepperoni - $20,00")
    firstItem.appendChild(firstContent);
    element.appendChild(firstItem);
    firstItem.style.marginBottom = "20px"

    const Margherita = new Image();
    Margherita.src = margherita;
    element.appendChild(Margherita)
    Margherita.style.height = "150px"
    Margherita.style.width = "150px"
    Margherita.style.border = "1px solid rgb(66, 44, 19)"
    Margherita.style.borderRadius = '50%'
    Margherita.style.marginBottom = '10px'
    const secondItem = document.createElement("p")
    const secondContent = document.createTextNode("Neapolitan (and Margherita) - $20,00")
    secondItem.appendChild(secondContent);
    element.appendChild(secondItem);
    secondItem.style.marginBottom = "20px"

    const Cheese = new Image();
    Cheese.src = cheese;
    element.appendChild(Cheese)
    Cheese.style.height = "150px"
    Cheese.style.width = "150px"
    Cheese.style.border = "1px solid rgb(66, 44, 19)"
    Cheese.style.borderRadius = '50%'
    Cheese.style.marginBottom = '10px'
    const thirdItem = document.createElement("p")
    const thirdContent = document.createTextNode("Double cheese - $25,00")
    thirdItem.appendChild(thirdContent);
    element.appendChild(thirdItem);
    thirdItem.style.marginBottom = "20px"


    const California = new Image();
    California.src = california;
    element.appendChild(California)
    California.style.height = "150px"
    California.style.width = "150px"
    California.style.border = "1px solid rgb(66, 44, 19)"
    California.style.borderRadius = '50%'
    California.style.marginBottom = '10px'
    const fourthItem = document.createElement("p")
    const fourthContent = document.createTextNode("California style - $30,00")
    fourthItem.appendChild(fourthContent);
    element.appendChild(fourthItem);
};

export function aboutLoad() {
    
}
