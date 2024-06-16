function modifyHeader() {
  let header = document.getElementById("header");
  header.style.backgroundColor = "#ffe0e0";
  header.style.fontSize = "24px";
  let paragraphs = header.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
  }
}

let mainContent = document.createElement("main");
mainContent.classList.add("main");

let image = document.createElement("img");
image.src = "https://via.placeholder.com/600";
image.alt = "Another Placeholder Image";
mainContent.appendChild(image);

let paragraph1 = document.createElement("p");
paragraph1.textContent = "This paragraph is dynamically created.";
mainContent.appendChild(paragraph1);

let paragraph2 = document.createElement("p");
paragraph2.textContent = "And this is another paragraph.";
mainContent.appendChild(paragraph2);

document.body.appendChild(mainContent);
