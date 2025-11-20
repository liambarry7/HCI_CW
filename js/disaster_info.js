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


const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const disasterType = params.get("type"); // get the type from url params

// change this to use a class for each disaster, rather than an object
const disasterData = {
    tsunami: `
        <h1>Flood Safety</h1>
        <p>Move to higher ground immediately...</p>
    `,
    earthquake: `
        <h1>Earthquake Safety</h1>
        <p>Drop, Cover, Hold On...</p>
    `,
    wildfire: `
        <h1>Wildfire Safety</h1>
        <p>Be ready to evacuate...</p>
    `
};

function loadDisasterContent(type) {
    const content = disasterData[type] || "<p>No info found.</p>";
    document.getElementById("disaster-content").innerHTML = content;
}

loadDisasterContent(disasterType);
