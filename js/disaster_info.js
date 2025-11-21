



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
    `,

    flood: `
        <h1>Flood Safety</h1>
        <p>get a boat...</p>
    `,

    activeWarzone: `
        <h1>active warzone Safety</h1>
        <p>get to air raid shelter...</p>
    `,

    industrialAccident: `
        <h1>industrial accident Safety</h1>
        <p>call emergancy services...</p>
    `,

    publicHealthEmergencies: `
        <h1>public health emergencies Safety</h1>
        <p>wear a facemask...</p>
    `,

    hurricane: `
        <h1>Hurricane Safety</h1>
        <p>get in storm shelter...</p>
    `,

    educationalContent: `
        <h1>Educational content</h1>
        <p>quiz quiz quiz!</p>
    `,
};

function loadDisasterContent(type) {
    const content = disasterData[type] || "<p>No info found.</p>";
    document.getElementById("disaster-content").innerHTML = content;
}

loadDisasterContent(disasterType);
