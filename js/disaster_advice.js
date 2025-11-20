// Load the navigation bar
const navBar = document.querySelector("header");
function loadHeader() {
    let displayContent =
    `
        <nav id="nav_bar">
            <ul>
                <input type="text" placeholder="Search..">
                <li class="navigation"><a href="index.html">Home</a></li>
                <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li>
                <li class="navigation"><a href="ema.html">Emergancy Medical Advice</a></li>
                <li class="navigation"><a href="regional_info.html">Region Info</a></li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = displayContent;
}

window.addEventListener("DOMContentLoaded", loadHeader, false);

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