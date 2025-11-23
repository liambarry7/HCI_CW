// Load the navigation bar
const navBar = document.getElementById("navwrapper");
function loadHeader() {
    let displayContent =
    `
        <nav id="navBar">
                    <div id="navLeft">
                <ul id="navList">
                    <li class="navigation"><input id="searchBar" type="text" placeholder="Search.."></li>
                    <li class="navigation"><a href="index.html">Home</a></li>
                    <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li>
                    <li class="navigation"><a href="ema.html">Emergency Medical Advice</a></li>
                    <li class="navigation"><a href="regional_info.html">Region Info</a></li>
                </ul>
            </div>

            <button id="settingsButton">
                <img id="settingsIcon" src="images/settings.png">
            </button>
        </nav>
    `;

    navBar.innerHTML = displayContent;
}

window.addEventListener("DOMContentLoaded", loadHeader, false);