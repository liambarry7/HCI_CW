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

const wildfire = new Disaster("wildfire", "a description of a wildfire.", "some advice points", "some risk factors", "some medical advice", "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/ahotOBqUoKI");
const tsunami = new Disaster("tsunami", "a description of a tsunami.", "some advice points", "some risk factors", "some medical advice", "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/7EDflnGzjTY");

const disasters = [];
disasters.push(wildfire);
disasters.push(tsunami);

// Get type parameter
const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const disasterType = params.get("type"); // get the type from url params
console.log(disasterType);

//  set which object to load
const queriedDisaster = disasters.find(d => d.type == disasterType) // returns the full object if matched
console.log(queriedDisaster);
console.log(queriedDisaster.description);

// get element to load to
const disasterContent = document.getElementById("disasterContent");

function loadContent() {
    if (queriedDisaster) {
        disasterContent.innerHTML = `
            <div id="tcontainer">
                <div class="tdiv1">
                    <h2>${queriedDisaster.type}</h2>
                    <p>${queriedDisaster.description}</p>
                </div>
                <div class="tdiv2">
                    <img src="${queriedDisaster.img1}">
                </div>
                
                
                <p>${queriedDisaster.advicePoints}</p>
                <iframe src="${queriedDisaster.videoLink}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
                <p>${queriedDisaster.riskFactors}</p>
                <p>${queriedDisaster.medicalAdvice}</p>
                <img src="${queriedDisaster.img2}">
            </div>
        `;
    } else {
        disasterContent.innerHTML = "<p>No disaster info found.</p>";
    }
}

window.addEventListener("DOMContentLoaded", loadContent, false);


// const infoSection = document.getElementById("disasterContent");

// function loadContent() {
//     let displayItem = disastersTest.map( (item) => {
//         return `
//         <div>
//             <p>${disastersTest.type}
//             <p>${disastersTest.description}
//             <p>${disastersTest.type}
//             <p>${disastersTest.type}
//             <p>${disastersTest.type}
//             <p>${disastersTest.type}
//         </div>
//         `;
//     })
//     displayItem = displayItem.join("");
//     console.log(displayItem);
//     infoSection.innerHTML = displayItem;
// }

// window.addEventListener("DOMContentLoaded", loadContent, false);


// function loadDisasterContent(type) {
//     const content = disasterData[type] || "<p>No info found.</p>";

//     let displayItem = disastersTest.map( (item) => {
//         return `
//         <div>
//             <p>${disastersTest.type}
//         </div>
//         `;
//     })
//     displayItem = displayItem.join("");

//     document.getElementById("disasterContent").innerHTML = content;
// }

// loadDisasterContent(disasterType);