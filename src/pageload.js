import img from './img.jpg';

export default function pageLoad() {

    const title = document.createElement("h1")
    const contentTitle = document.createTextNode("Romeo's Restaurant")
    title.appendChild(contentTitle);
    const element = document.getElementById("content")
    element.appendChild(title);
    
    const para = document.createElement("p");
    const node = document.createTextNode("Fanciest restaurant! \n Come and bring your family!");
    para.appendChild(node);
    element.appendChild(para);

    const myImg = new Image();
    myImg.src = img;

    element.appendChild(myImg);
    
}

pageLoad();

