// Load page content
const infoSection = document.querySelector(".info-section"); // '.' for class, '#' for id
function loadContent() {
    let displayContent = 
    `
        <p>do something</p>
    `;

    infoSection.innerHTML = displayContent;
}

window.addEventListener("DOMContentLoaded", loadContent, false);