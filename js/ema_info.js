
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
    "images/SevereBleeding2.jpg",
    "images/SevereBleeding3.jpg",
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
    "images/CPR2.jpg",
    "images/CPR3.jpg",
    "https://www.youtube.com/embed/npH4uY4HhJA"
);

const fractures = new Emergency(
    "Fractures",
    "Managing Fractures & Broken Bones",
    "Fractures occur when a bone breaks due to force, falls, or crushing injuries. Proper first aid prevents further damage.",
    "Symptoms include severe pain, deformity, swelling, and inability to move the limb. Some fractures break through the skin (open fractures), which require urgent medical care.",
    [
        "Do not move or straighten the limb.",
        "Support the injured area using a sling or padding.",
        "Control bleeding if present, but avoid pressing directly on any protruding bone.",
        "Apply an ice pack wrapped in a cloth to reduce swelling.",
        "Call emergency services for severe or open fractures."
    ],
    [
        "Falls from height",
        "Sports impacts",
        "Vehicle or workplace accidents"
    ],
    [
        "https://www.nhs.uk/conditions/broken-bone/",
        "https://www.redcross.org.uk/first-aid/learn-first-aid/broken-bones"
    ],
    "images/fractures2.jpg",
    "images/fractures3.jpg",
    "https://www.youtube.com/embed/7o6LYkzQ2lM"
);

const burns = new Emergency(
    "Burns",
    "First Aid for Burns",
    "Burns can occur from heat, chemicals, electricity, or friction. Quick response reduces tissue damage.",
    "Burns are categorized into first-, second-, and third-degree. Severe burns require immediate emergency care.",
    [
        "Cool the burn with cool running water for at least 20 minutes.",
        "Remove jewellery or tight items before swelling begins.",
        "Cover the burn with a sterile, non-adhesive dressing.",
        "Do not apply butter, oils, creams, or ice.",
        "Seek emergency help for large, deep, chemical, or electrical burns."
    ],
    [
        "Fire or hot surfaces",
        "Scalds from boiling liquids",
        "Chemical splashes"
    ],
    [
        "https://www.nhs.uk/conditions/burns-and-scalds/",
        "https://www.redcross.org.uk/first-aid/learn-first-aid/burns"
    ],
    "images/burns2.jpg",
    "images/burns3.jpg",
    "https://www.youtube.com/embed/Wf8sZImEJn4"
);

const unconscious = new Emergency(
    "UnconsciousPerson",
    "Helping an Unconscious Person",
    "A person who is unconscious but breathing must be kept safe until help arrives.",
    "Loss of consciousness may be caused by head injury, shock, low oxygen, alcohol, drugs, or medical emergencies.",
    [
        "Check breathing and call emergency services.",
        "Place the person in the recovery position.",
        "Loosen tight clothing to help breathing.",
        "Monitor breathing until help arrives.",
        "Do not give food or drink."
    ],
    [
        "Head injury",
        "Severe bleeding or shock",
        "Medical conditions such as diabetes or stroke"
    ],
    [
        "https://www.redcross.org.uk/first-aid/learn-first-aid/unresponsive-and-breathing",
        "https://www.nhs.uk/common-health-questions/injuries/what-should-i-do-if-someone-is-unconscious/"
    ],
    "images/unconscious2.jpg",
    "images/unconscious3.jpg",
    "https://www.youtube.com/embed/uL5iWae1R3U"
);

const choking = new Emergency(
    "Choking",
    "Choking: Adult, Child, and Infant",
    "Choking occurs when a foreign object blocks the airway. Immediate action is needed to restore breathing.",
    "Symptoms include inability to speak, wheezing, clutching the throat, and panic. Treatment differs by age group.",
    [
        "Encourage coughing if they can still breathe.",
        "Give up to 5 back blows.",
        "Give up to 5 abdominal thrusts (Heimlich manoeuvre).",
        "Alternate back blows and abdominal thrusts until the object is cleared.",
        "For infants: give 5 back blows followed by 5 chest thrusts — never abdominal thrusts."
    ],
    [
        "Eating too quickly",
        "Children placing objects in their mouth",
        "Alcohol-related choking incidents"
    ],
    [
        "https://www.redcross.org.uk/first-aid/learn-first-aid/choking",
        "https://www.nhs.uk/conditions/choking/"
    ],
    "images/choking2.jpg",
    "images/choking3.jpg",
    "https://www.youtube.com/embed/T7aNSRoDCmg"
);

const shock = new Emergency(
    "Shock",
    "Recognizing & Treating Shock",
    "Shock is a life-threatening condition where the body’s organs do not get enough blood or oxygen.",
    "Shock can occur after bleeding, burns, allergic reactions, or trauma. Signs include pale skin, dizziness, fast breathing, and confusion.",
    [
        "Call emergency services immediately.",
        "Lay the person down and elevate their legs if safe to do so.",
        "Keep them warm with a blanket.",
        "Do not give food or drink.",
        "Treat the cause (bleeding, allergies, etc.) if possible."
    ],
    [
        "Severe bleeding",
        "Infection or sepsis",
        "Major trauma or burns"
    ],
    [
        "https://www.redcross.org.uk/first-aid/learn-first-aid/shock",
        "https://www.nhs.uk/conditions/shock/"
    ],
    "images/shock2.jpg",
    "images/shock3.jpg",
    "https://www.youtube.com/embed/f8dN0kCkYAM"
);

const headInjury = new Emergency(
    "HeadInjury",
    "Dealing With Head & Spine Injuries",
    "Head and spine injuries can be extremely serious and require very careful handling.",
    "Trauma may cause concussion, bleeding within the skull, or spinal damage. Improper movement can worsen injuries.",
    [
        "Call emergency services for any serious head or spine injury.",
        "Keep the person still — do not move their head or neck.",
        "Apply gentle pressure only if there is external bleeding.",
        "Monitor for vomiting, confusion, or worsening symptoms.",
        "If unconscious but breathing, place in the recovery position while supporting the neck."
    ],
    [
        "Falls from height",
        "Sports collisions",
        "Vehicle crashes"
    ],
    [
        "https://www.nhs.uk/conditions/head-injury-and-concussion/",
        "https://www.redcross.org.uk/first-aid/learn-first-aid/head-injuries"
    ],
    "images/head-injury2.jpg",
    "images/head-injury3.jpg",
    "https://www.youtube.com/embed/qY2Xx4i2lHk"
);



// "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/ahotOBqUoKI"
const emas = [];
emas.push(severeBleeding);
emas.push(cpr);
emas.push(fractures);
emas.push(burns);
emas.push(unconscious)
emas.push(choking);
emas.push(shock);
emas.push(headInjury);

// Get type parameter
const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const disasterType = params.get("type"); // get the type from url params
console.log(disasterType);

//  set which object to load
const queriedDisaster = emas.find(d => d.type == disasterType) // returns the full object if matched
if (queriedDisaster) {
    console.log(queriedDisaster);
    console.log(queriedDisaster.description);
}

// get element to load to
const disasterContent = document.getElementById("disasterContent");

function loadContent() {
    if (queriedDisaster != undefined) {
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
    } else {
        disasterContent.innerHTML = "<p>No disaster info found.</p>";
    }
}

window.addEventListener("DOMContentLoaded", loadContent, false);