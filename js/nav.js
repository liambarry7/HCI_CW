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
                        <a href="regions.html" class="smallNavigation">Region Info</a>
                        <a href="newsletter-signup.html">Join us!</a>
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
                    <li class="navigation"><a href="regions.html">Region Info</a></li> |
                    <li class="navigation"><a href="newsletter-signup.html">Join us!</a></li>
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
    const smallSettingsButton = document.getElementById("smallSettingsButton");
    const settingsClose = document.getElementById("settingsClose");
    const settingsSave = document.getElementById("settingsSave");
    const textSizeSelector = document.getElementById("textSize");

    // Add event listeners
    settingsButton.addEventListener("click", () => {
        settingsPopup.style.display = "flex";
    });

    smallSettingsButton.addEventListener("click", () => {
        settingsPopup.style.display = "flex";
    });

    settingsClose.addEventListener("click", () => {
        settingsPopup.style.display = "none";
    });

    settingsSave.addEventListener("click", () => {
        const size = textSizeSelector.value;
        applyTextSize(size);
        localStorage.setItem("textSize", size);
        settingsPopup.style.display = "none";
    });

    // Load saved value on startup
    const savedSize = localStorage.getItem("textSize");
    if (savedSize) applyTextSize(savedSize);

    
    // Grab toggle element
    const largeTextToggle = document.getElementById("largeTextToggle");

    // Apply saved text size on page load
    if (localStorage.getItem("largeTextEnabled") === "true") {
        document.documentElement.classList.add("large-text");
        if (largeTextToggle) largeTextToggle.checked = true;
    }

    // When user toggles it ON/OFF
    if (largeTextToggle) {
        largeTextToggle.addEventListener("change", () => {

            if (largeTextToggle.checked) {
                document.documentElement.classList.add("large-text");
                localStorage.setItem("largeTextEnabled", "true");
            } else {
                document.documentElement.classList.remove("large-text");
                localStorage.setItem("largeTextEnabled", "false");
            }

        });
    }

    // for small screen nav settings button:

    smallSettingsButton.addEventListener("click", () => {
        settingsPopup.style.display = "flex";
    });

    const colorblindDropdown = document.getElementById("colorblindMode");

    // Apply saved colorblind mode on startup
    const savedColorblind = localStorage.getItem("colorblindMode");
    if (savedColorblind) applyColorblindMode(savedColorblind);

    // Save button functionality — add this to your settingsSave listener
    settingsSave.addEventListener("click", () => {
        const size = textSizeSelector.value;
        applyTextSize(size);
        localStorage.setItem("textSize", size);

        const cbMode = colorblindDropdown.value;
        applyColorblindMode(cbMode);
        localStorage.setItem("colorblindMode", cbMode);

        settingsPopup.style.display = "none";
    });

}

window.addEventListener("DOMContentLoaded", loadHeader, false);

function toggleBurger() {
    document.getElementById("smallNavList").classList.toggle("show");
    document.getElementById("smallSearchBar").classList.toggle("hide");
    // document.getElementById("smallSettingsButton").classList.toggle("hide");

}

function applyTextSize(size) {
    document.documentElement.classList.remove("text-normal", "text-large", "text-xlarge");
    document.documentElement.classList.add(`text-${size}`);
}

function applyColorblindMode(mode) {
    document.documentElement.classList.remove(
        "cb-protanopia", 
        "cb-deuteranopia", 
        "cb-tritanopia"
    );

    if (mode === "protanopia") {
        document.documentElement.classList.add("cb-protanopia");
    } 
    else if (mode === "deuteranopia") {
        document.documentElement.classList.add("cb-deuteranopia");
    } 
    else if (mode === "tritanopia") {
        document.documentElement.classList.add("cb-tritanopia");
    }
}