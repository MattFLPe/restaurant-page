import img from './img.jpg';
import icon from './icon.jpg';

export default function pageLoad() {

    const element = document.getElementById("content");

    const title = document.createElement("h1");
    const contentTitle = document.createTextNode("Alighieri's Pizzeria");
    title.appendChild(contentTitle);
    element.appendChild(title);
    title.style.color = '-webkit-linear-gradient(#eee, #333)';

    
    
    const h4 = document.createElement("h4");
    const secondTitle = document.createTextNode("Fanciest pizzeria of the city!");
    h4.appendChild(secondTitle);
    element.appendChild(h4);
    h4.style.margin = "20px"

    const myIcon = new Image();
    myIcon.src = icon;

    element.appendChild(myIcon);
    myIcon.style.width = '200px';
    myIcon.style.height = '200px';
    myIcon.style.marginBottom = '10px'

    myIcon.style.border = '1px solid rgba(11, 36, 11)';
    myIcon.style.borderRadius = '50%'

    
    const para = document.createElement('p');
    const paraContent = document.createTextNode(`Welcome to Alighieri's – where passion meets flavor! 
    Step into a world of delicious indulgence, where every slice tells a story of craftsmanship and love for the art of pizza-making.`);
    para.appendChild(paraContent);
    element.appendChild(para);
    para.style.width = "500px";
    para.style.margin = "0 auto";
    

    
    const myImg = new Image();
    myImg.src = img;
    
    
    


    /*
    element.appendChild(myImg);
    myImg.style.width = '100%';
    myImg.style.height = '100%';
    myImg.style.margin = '20px 0px'
    */

}

pageLoad();

