const text = "Coming Soon...";
const typedElem = document.getElementById("typed");
let index = 0;

function type() {
  if (index < text.length) {
    typedElem.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150); // Adjust speed here
  }
}

window.onload = type;
