// class Disaster {
//     constructor(type, description, advicePoints, riskFactors, medicalAdvice, img1, img2, videoLink) {
//         this.type = type;
//         this.description = description;
//         this.advicePoints = advicePoints;
//         this.riskFactors = riskFactors;
//         this.medicalAdvice = medicalAdvice;
//         this.img1 = img1;
//         this.img2 = img2;
//         this.videoLink = videoLink;
//     }
// }

// const wildfire = new Disaster("wildfire", "a description of a wildfire.", "some advice points", "some risk factors", "some medical advice", "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/ahotOBqUoKI");
// const tsunami = new Disaster("tsunami", "a description of a tsunami.", "some advice points", "some risk factors", "some medical advice", "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/7EDflnGzjTY");

class Disaster {
    constructor(type, desc1, desc2, advicePoints, riskFactors, usefulLinks, img1, img2, videoLink) {
        this.type = type;
        this.desc1 = desc1;
        this.desc2 = desc2;
        this.advicePoints = advicePoints;
        this.riskFactors = riskFactors;
        this.usefulLinks = usefulLinks;
        this.img1 = img1;
        this.img2 = img2;
        this.videoLink = videoLink;
    }
}

const earthquake = new Disaster("Earthquake", "Earthquakes can strike without warning, making preparation essential—especially for people living in high-risk areas such as countries along the Pacific Ring of Fire (including Japan, Indonesia, Chile, Mexico, and the U.S. West Coast), parts of South Asia, Turkey, Iran, and regions near major fault lines like the Himalayas and the Alpide Belt. If you live in or travel through these zones, secure heavy furniture, store fragile items on low shelves, and keep an emergency kit with water, food, flashlights, batteries, and first aid supplies. Establish a family communication plan and learn how to shut off your utilities safely.", "When shaking begins, remember to Drop, Cover, and Hold On: drop to the ground, take cover under sturdy furniture, and hold on until the movement stops. Indoors, stay put to avoid falling debris; outdoors, move away from buildings, power lines, and trees. After the shaking stops, expect aftershocks, check for injuries, and avoid damaged structures or areas with gas leaks. Use battery-powered radios or phones to get official updates, and follow emergency instructions from local authorities, especially in regions where strong aftershocks and infrastructure damage are common.", ["Drop, Cover, and Hold On — drop to your hands and knees, take cover under sturdy furniture, and hold on until the shaking stops.", "Stay indoors if you’re already inside — running outside during shaking increases the risk of injury from falling debris.", "Stay away from windows, mirrors, and glass to avoid shattering hazards.", "Protect your head and neck with your arms or a cushion if no shelter is nearby.", "If you’re outside, move to an open area away from buildings, streetlights, trees, and power lines."], ["Living near major fault lines — regions like the Pacific Ring of Fire or the Alpide Belt experience frequent seismic activity.", "Weak or poorly constructed buildings — older structures or those not built to seismic standards are more likely to collapse.", "Soft or unstable ground conditions — areas prone to liquefaction or landslides can amplify damage during a quake."], ["https://www.ready.gov/earthquakes", "https://earthquake.usgs.gov", "https://www.ifrc.org/disaster-preparedness"], "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/ahotOBqUoKI");
// const tsunami = new Disaster("tsunami", "a description of a tsunami.", "some advice points", "some risk factors", "some medical advice", "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/7EDflnGzjTY");

const disasters = [];
disasters.push(earthquake);
// disasters.push(tsunami);

// Get type parameter
const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const disasterType = params.get("type"); // get the type from url params
console.log(disasterType);

//  set which object to load
const queriedDisaster = disasters.find(d => d.type == disasterType) // returns the full object if matched
if (queriedDisaster) {
    console.log(queriedDisaster);
    console.log(queriedDisaster.description);
}

// get element to load to
const disasterContent = document.getElementById("disasterContent");

function loadContent() {
    if (queriedDisaster != undefined) {
        disasterContent.innerHTML = `
            <h2>${queriedDisaster.type} ADVICE</h2>
            <div id="gridcontainer">

                <div class="row1">
                    <div class="gridItem">
                        <p>${queriedDisaster.desc1}</p>
                        <p>${queriedDisaster.desc2}</p>
                    </div>
                    <div class="gridItem">
                        <img src="${queriedDisaster.img1}">
                    </div>
                </div>

                <div class="row2">
                    <div class="gridItem">
                        <iframe width="560" height="315" src="${queriedDisaster.videoLink}"></iframe>
                    </div>
                    <div class="gridItem">
                        <h3>Here are 5 key advice points on what to do during an ${queriedDisaster.type}:</h3> 
                        <ol>
                            <li>${queriedDisaster.advicePoints[0]}</li>
                            <li>${queriedDisaster.advicePoints[1]}</li>
                            <li>${queriedDisaster.advicePoints[2]}</li>
                            <li>${queriedDisaster.advicePoints[3]}</li>
                            <li>${queriedDisaster.advicePoints[4]}</li>
                        </ol>
                    </div>
                </div>

                <div class="row3">
                    <div class="gridItem">
                        <h3>${queriedDisaster.type} Risk Factors</h3>
                        <ol>
                            <li>${queriedDisaster.riskFactors[0]}</li>
                            <li>${queriedDisaster.riskFactors[1]}</li>
                            <li>${queriedDisaster.riskFactors[2]}</li>
                        </ol>
                        <h3>Helpful websites for earthquake information:</h3>
                        <ol>
                            <li><a href="${queriedDisaster.usefulLinks[0]}">${queriedDisaster.usefulLinks[0]}</a></li>
                            <li><a href="${queriedDisaster.usefulLinks[1]}">${queriedDisaster.usefulLinks[1]}</a></li>
                            <li><a href="${queriedDisaster.usefulLinks[2]}">${queriedDisaster.usefulLinks[2]}</a></li>
                        </ol>
                    </div>
                    <div class="gridItem">
                        <img src="${queriedDisaster.img2}" width="500px">
                    </div>
                </div>

            </div>
        `;
    } else {
        disasterContent.innerHTML = "<p>No disaster info found.</p>";
    }
}

window.addEventListener("DOMContentLoaded", loadContent, false);