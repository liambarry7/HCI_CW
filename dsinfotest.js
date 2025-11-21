class Disaster {
    constructor(type, description, advicePoints, riskFactors, medicalAdvice, img1, img2, videoLink) {
        this.type = type;
        this.description = description;
        this.advicePoints = advicePoints;
        this.riskFactors = riskFactors;
        this.medicalAdvice = medicalAdvice;
        this.img1 = img1;
        this.img2 = img2;
        this.videoLink = videoLink;
    }
}

const tsunami = new Disaster("Tsunami", "a description of a tsunami.", "some advice points", "some risk factors", "some medical advice", "--photo1--", "--photo2--", "www.linktovideo.com")

const disastersTest = [];
disastersTest.push(tsunami);

const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const disasterType = params.get("type"); // get the type from url params

const infoSection = document.getElementById("disasterContent");

function loadContent() {
    let displayItem = disastersTest.map( (item) => {
        return `
        <div>
            <p>${disastersTest.type}
        </div>
        `;
    })
    displayItem = displayItem.join("");
    console.log(displayItem);
    infoSection.innerHTML = displayItem;
}

window.addEventListener("DOMContentLoaded", loadContent, false);


function loadDisasterContent(type) {
    const content = disasterData[type] || "<p>No info found.</p>";

    let displayItem = disastersTest.map( (item) => {
        return `
        <div>
            <p>${disastersTest.type}
        </div>
        `;
    })
    displayItem = displayItem.join("");

    document.getElementById("disasterContent").innerHTML = content;
}

loadDisasterContent(disasterType);