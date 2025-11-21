// Load the navigation bar
const navBar = document.getElementById("navBar");
function loadHeader() {
    let displayContent =
    `
        <nav>
            <ul>
                <input type="text" placeholder="Search..">
                <li class="navigation"><a href="index.html">Home</a></li>
                <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li>
                <li class="navigation"><a href="ema.html">Emergancy Medical Advice</a></li>
                <li class="navigation"><a href="regional_info.html">Region Info</a></li>
                <input type="image" src="images/settings.png    ">
            </ul>
        </nav>
    `;

    navBar.innerHTML = displayContent;
}

window.addEventListener("DOMContentLoaded", loadHeader, false);