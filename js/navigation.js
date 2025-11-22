// Load the navigation bar
const navBar = document.getElementById("navBar");
function loadHeader() {
    let displayContent =
    `
        <nav id="nav">
            <ul id="navList">
                <li class="navigation"><input id="searchBar" type="text" placeholder="Search.."></li>
                <li class="navigation"><a href="index.html">Home</a></li>
                <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li>
                <li class="navigation"><a href="ema.html">Emergancy Medical Advice</a></li>
                <li class="navigation"><a href="regional_info.html">Region Info</a></li>
                <li class="navigation">
                    <button id="settingsButton">
                        <img id="settingsIcon" src="images/settings.png">
                    </button>
                </li>
            </ul>
        </nav>
    `;

    navBar.innerHTML = displayContent;
}

window.addEventListener("DOMContentLoaded", loadHeader, false);