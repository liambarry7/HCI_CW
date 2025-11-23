const navBar = document.getElementById('nav');
function loadHeader() {
    let displayContent =
    `
        <nav id="nav_bar">
            <ul>
                <input type="text" placeholder="Search..">
                <li class="navigation active"><a href="index.html">Home</a></li>
                <li class="navigation"><a href="disaster_advice.html">Disaster Advice</a></li>
                <li class="navigation"><a href="ema.html">Emergancy Medical Advice</a></li>
                <li class="navigation"><a href="regional_info.html">Region Info</a></li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = displayContent;
}

window.addEventListener("DOMContentLoaded", loadHeader, false);