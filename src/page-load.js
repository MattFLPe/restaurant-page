export default function component () {

    const title = document.createElement("h1")
    const contentTitle = document.createTextNode("Romeo's Restaurant")
    title.appendChild(contentTitle);
    const para = document.createElement("p");
    const node = document.createTextNode("This is a new paragraph.");
    para.appendChild(node);

}

