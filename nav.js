const navBar = document.getElementById("navwrapper");
function loadHeader() {
    let displayContent =
    `
        <nav id="navBar">

            <div id="smallNav">                    
                <input id="smallSearchBar" type="text" placeholder="Search..">

                <div id="hamburger-wrapper">

                    <a id="hamburger" onclick="toggleBurger()">
                        <i class="fa-solid fa-bars"></i>
                    </a>
                    
                    <div id="smallNavList">
                        <a href="index.html" class="smallNavigation">Home</a>
                        <a href="disaster_advice.html" class="smallNavigation">Disaster Advice</a>
                        <a href="ema.html" class="smallNavigation">Emergency Medical Advice</a>
                        <a href="regional_info.html" class="smallNavigation">Region Info</a>
                    </div>
                </div>

                <button id="smallSettingsButton">
                    <img id="settingsIcon" src="images/settings.png">
                </button>
            </div>

            <div id="navLeft">            
                <ul id="navList">
                    <li class="navigation"><input id="searchBar" type="text" placeholder="Search.."></li>
                    <li class="navigation"><a href="index.html">Home</a></li> |
                    <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li> |
                    <li class="navigation"><a href="ema.html">Emergency Medical Advice</a></li> |
                    <li class="navigation"><a href="regional_info.html">Region Info</a></li>
                </ul>
            </div>

            <button id="settingsButton">
                <img id="settingsIcon" src="images/settings.png">
            </button>
        </nav>
    `;

    navBar.innerHTML = displayContent;

    // for normal nav settings button:
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

    // for small screen nav settings button:
    const smallSettingsButton = document.getElementById("smallSettingsButton");
    // const smallSettingsPopup = document.getElementById("settingsPopup");
    // const smallSettingsClose = document.getElementById("settingsClose");
    // const smallSettingsSave = document.getElementById("settingsSave");

    smallSettingsButton.addEventListener("click", () => {
        settingsPopup.style.display = "flex";
    });

    // settingsClose.addEventListener("click", () => {
    //     settingsPopup.style.display = "none";
    // });

    // settingsSave.addEventListener("click", () => {
    //     settingsPopup.style.display = "none";
    //     alert("Settings saved!");
    // });

}

window.addEventListener("DOMContentLoaded", loadHeader, false);

function toggleBurger() {
    document.getElementById("smallNavList").classList.toggle("show");
    document.getElementById("smallSearchBar").classList.toggle("hide");
    // document.getElementById("smallSettingsButton").classList.toggle("hide");

}

