// Load the navigation bar
const navBar = document.getElementById("navwrapper");
function loadHeader() {
    let displayContent =
    `
        <nav id="navBar">
            <div id="navLeft">
                <ul id="navList">
                    <li class="navigation"><input id="searchBar" type="text" placeholder="Search.."></li>
                    <li class="navigation"><a href="index.html">Home</a></li> |
                    <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li> |
                    <li class="navigation"><a href="ema.html">Emergency Medical Advice</a></li> |
                    <li class="navigation"><a href="regions.html">Region Info</a></li>
                </ul>
            </div>

            <button id="settingsButton">
                <img id="settingsIcon" src="images/settings.png">
            </button>
        </nav>
    `;

    navBar.innerHTML = displayContent;

    
    const settingsButton = document.getElementById("settingsButton");
    const settingsPopup = document.getElementById("settingsPopup");
    const settingsClose = document.getElementById("settingsClose");
    const settingsSave = document.getElementById("settingsSave");

    settingsButton.addEventListener("click", () => {
        settingsPopup.style.display = "flex";
    });

    settingsClose.addEventListener("click", () => {
        settingsPopup.style.display = "none";
    });

    settingsSave.addEventListener("click", () => {
        settingsPopup.style.display = "none";
        alert("Settings saved!");
    });
}

window.addEventListener("DOMContentLoaded", loadHeader, false);
