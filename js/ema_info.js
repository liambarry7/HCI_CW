
class Emergency {
    constructor(type, title, desc1, desc2, advicePoints, riskFactors, usefulLinks, img1, img2, videoLink) {
        this.type = type;
        this.title = title;
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

const severeBleeding = new Emergency(
    "SevereBleeding",
    "Treating Severe Bleeding",
    "Severe bleeding is a life-threatening emergency in which a person can lose a dangerous amount of blood within minutes. Immediate action is critical to prevent shock and death.",
    "Bleeding can occur from deep cuts, punctures, crushed tissue, or traumatic injury. Arterial bleeding (bright red blood that spurts rhythmically) is especially dangerous. Use firm pressure, bandages, and tourniquets if needed.",
    [
        "Call emergency services immediately.",
        "Apply firm, direct pressure with a clean cloth or bandage.",
        "If blood soaks through, add more layers — do not remove the original bandage.",
        "Use a tourniquet for uncontrolled limb bleeding and record the time applied.",
        "Keep the casualty calm and lying flat to reduce shock."
    ],
    [
        "Deep cuts from accidents or tools",
        "Vehicle collisions or workplace injuries",
        "Arterial bleeding from major blood vessels"
    ],
    [
        "https://www.redcross.org.uk/first-aid/learn-first-aid/bleeding",
        "https://www.cdc.gov/stopthebleed"
    ],
    "images/images/placeholder.jpg",
    "images/images/placeholder.jpg",
    "https://www.youtube.com/embed/5ZK4S-9J1i0"
);

const cpr = new Emergency(
    "CPR",
    "Performing CPR (Adult & Child)",
    "CPR is an emergency procedure used when someone has stopped breathing or their heart has stopped. It keeps blood and oxygen flowing until medical help arrives.",
    "CPR combines chest compressions and rescue breaths (unless using compression-only CPR). It buys critical time during cardiac arrest.",
    [
        "Check responsiveness and breathing, and call emergency services.",
        "Place your hands in the center of the chest and push hard and fast (100–120 bpm).",
        "For adults: compress 5–6 cm deep. For children: 4–5 cm.",
        "Give 30 compressions followed by 2 rescue breaths if trained.",
        "Use an AED as soon as it becomes available."
    ],
    [
        "Drowning incidents",
        "Sudden cardiac arrest",
        "Severe choking leading to collapse"
    ],
    [
        "https://www.redcross.org.uk/first-aid/learn-first-aid/cpr",
        "https://www.heart.org/en/cpr"
    ],
    "images/placeholder.jpg",
    "images/placeholder.jpg",
    "https://www.youtube.com/embed/npH4uY4HhJA"
);

const placeholder = new Emergency(
    "placeholder",
     "Emergency Medical Advice", 
     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea exercitationem nemo vel deleniti dolore possimus voluptatum error fuga laboriosam porro, necessitatibus reiciendis corrupti fugit sit temporibus voluptate, enim labore.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea exercitationem nemo vel deleniti dolore possimus voluptatum error fuga laboriosam porro, necessitatibus reiciendis corrupti fugit sit temporibus voluptate, enim labore.", 
    ["advice point 1", "advice point 2", "advice point 3", "advice point 4", "advice point 5"],
    ["risk factor 1", "risk factor 2", "risk factor 3"], 
    ["https://www.example.com", "https://www.example.com", "https://www.example.com"], 
    "images/placeholder.jpg", 
    "images/placeholder.jpg", 
    "https://www.youtube.com/embed/uBXwLIM4Ryc?si=sc3a80wcSzGcj2Gn"
);




// "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/ahotOBqUoKI"
const emas = [];
emas.push(severeBleeding);
emas.push(cpr);


// Get type parameter
const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const disasterType = params.get("type"); // get the type from url params
console.log(disasterType);

//  set which object to load
let queriedDisaster = emas.find(d => d.type == disasterType) // returns the full object if matched
if (queriedDisaster) {
    console.log(queriedDisaster);
    console.log(queriedDisaster.description);
}

// get element to load to
const disasterContent = document.getElementById("disasterContent");

function loadContent() {
    if (queriedDisaster == undefined) {
        queriedDisaster = placeholder
    }
    
    disasterContent.innerHTML = `
        <h2>${queriedDisaster.title} ADVICE</h2>
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
                    <h3>Here are 5 key advice points on ${queriedDisaster.title}:</h3> 
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
                    <h3>${queriedDisaster.title} Risk Factors</h3>
                    <ol>
                        <li>${queriedDisaster.riskFactors[0]}</li>
                        <li>${queriedDisaster.riskFactors[1]}</li>
                        <li>${queriedDisaster.riskFactors[2]}</li>
                    </ol>
                    <h3>Helpful websites for ${queriedDisaster.title} information:</h3>
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
}

window.addEventListener("DOMContentLoaded", loadContent, false);