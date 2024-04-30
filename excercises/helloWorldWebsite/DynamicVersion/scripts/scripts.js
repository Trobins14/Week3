"use strict"

window.onload = init;
function init() {
    const helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;
}
function onHelloBtnClicked() {
    const messagePara = document.getElementById("messagePara");
    alert ("Hi there!");
    // messagePara.innerHTML = "Hi there!";
}
// window.onload = init();
