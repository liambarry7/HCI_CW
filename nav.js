const navBar = document.getElementById("navwrapper");
function loadHeader() {
    let displayContent =
    `
        <nav id="navBar">

            <div id="smallNav">                    
                <input id="smallSearchBar" type="text" placeholder="Search..">
                
                

                <button id="smallSettingsButton">
                    <img id="settingsIcon" src="images/settings.png">
                </button>

                <a id="hamburger" onclick="abc()">
                    <i class="fa-solid fa-bars"></i>
                </a>

                <ul id="smallNavList">
                    <li class="navigation"><a href="index.html">Home</a></li>
                    <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li>
                    <li class="navigation"><a href="ema.html">Emergency Medical Advice</a></li>
                    <li class="navigation"><a href="regional_info.html">Region Info</a></li>
                </ul>
            </div>

            <div id="navLeft">            
                <ul id="navList">
                    <li class="navigation"><input id="searchBar" type="text" placeholder="Search.."></li>
                    <li class="navigation"><a href="index.html">Home</a></li> |
                    <li class="navigation active"><a href="disaster_advice.html">Disaster Advice</a></li> |
                    <li class="navigation"><a href="ema.html">Emergency Medical Advice</a></li> |
                    <li class="navigation"><a href="regional_info.html">Region Info</a></li> |
                    <li class="navigation"><a href="newsletter-signup.html">Newsletter Signup</a></li>
                </ul>
            </div>

            <button id="settingsButton">
                <img id="settingsIcon" src="images/settings.png">
            </button>
        </nav>
    `;

    navBar.innerHTML = displayContent;

    const hamburger = document.getElementById("hamburger");
    const mobileNavList = document.getElementById("smallNavList");

    hamburger.addEventListener("click", () => {
        mobileNavList.classList.toggle("show");
    });
}

window.addEventListener("DOMContentLoaded", loadHeader, false);

function abc() {
    var x = document.getElementById("smallNavList");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}

