class Disaster {
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

// info from https://www.bbc.co.uk/safety/resources/aztopics/earthquakes
const earthquake = new Disaster("earthquake", "Earthquake", "An earthquake is the shaking of the Earth's surface from a release of energy in the lithosphere that creates seismic waves. They are most common in regions that line tectonic plate boundaries, such as the Pacific Ring of Fire.", "It is a good idea to have an Earthquake plan to help prepare yourself for an earthquake. An emergancy grab bag full of first aid kits, torches, food, water and other necessitities are a good idea to keep to hand to assist in the event of an earthquake.", ["Stay indoors if you’re already inside — stay away from windows, walls and outside doors.", "Stay inside until the shaking stops", "If you are outside, stay there, but stay away from any buildings, streetlights and utility wires.", "Expect aftershocks - drop, cover and hold on.", "Put together an earthquake plan."], ["Poorly constructed buildings and structures.", "Living in areas of high tectonic seismic activity.", "Earthquakes can be caused by non natural causes, such as mine blasts, fracking and nuclear tests."], ["https://www.ready.gov/earthquakes", "https://earthquake.usgs.gov", "https://www.ifrc.org/disaster-preparedness"], "images/earthquake2.jpg", "images/earthquake3.jpg", "https://www.youtube.com/embed/I0ureVMVzP8?si=CNOwJ0chtrxpgYQ8");

// info from https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/tsunami.html#:~:text=If%20your%20community%20does%20not,tsunami%20could%20follow%20an%20earthquake.
const tsunami = new Disaster("tsunami", "Tsunami", "A Tsunami is a series of ocean waves that are caused by earthquakes, landslides or volcanic eruptions. These waves can injure people and destroy entire towns. They strike as fast moving walls of water moving across land, and can flood more than a mile inland.", "One way of being warned about a tsunami is by an official alert, often announced trhough local radio stations or other emergency alert systems. A natural way to be warned about a tsunami is a loud raor from the ocean, or the sudden retreat of water from the sea.", ["Immediately move for higher ground or inland.", "Do not return home unless officials say it is safe to return.", "Avoid roads that are flooded for potential damage and could collapse.", "Do not touch the floodwater - they may contain harmful chemicals, bacteria or live wires", "Avoid damaged or fallen power lines."], ["Pacific Ring of Fire", "Low lying coastal areas.", "Areas with poor sea defences."], ["https://www.noaa.gov/jetstream/tsunamis/tsunami-dangers", "https://shelterbox.org/disasters-explained/tsunamis/", "https://www.tsunami.gov/?page=tsunamiFAQ"], "images/tsunami2.jpg", "images/tsunami3.jpg", "https://www.youtube.com/embed/7EDflnGzjTY?si=Wh9OkEMu9pwX24HQ");

// info from https://www.ready.gov/hurricanes
const hurricane = new Disaster("hurricane", "Hurricane  & Typhoon", "Hurricanes are dangerous and can cause major damage from storm surge, wind damage, rip currents and flooding. They can happen along any U.S. coast or in any territory in the Atlantic or Pacific oceans. Storm surge historically is the leading cause of hurricane-related deaths in the United States. In parts of the western North Pacific, hurricanes are called typhoons.", "Hurricanes and typhoons are not just dangers to coastal areas, they also move inland too. They typically arrive in specific seasons throughout the year, and can cause huge amounts of damage and take many lives.", ["Make an emergency plan for your household.", "Consider installing storm shelters in your homes or gardens to keep you safe.", "Learn evacuation routes if you live in an evacuation zone.", "Recognise warnings and alerts from local authorities to remain safe.", "De-clutter drains and gutters to help your home battle the rain."], ["Low lying areas near the coast are vulnerable to storm surges, flooding and winds.", "Areas with warm, moist atmospheric conditions near the equator are particulary vulnerable to hurricanes and typhoons.", "Lack of an emergency plan or storm shelter poses you at a higher risk."], ["https://www.ready.gov/hurricanes", "https://public.wmo.int/en/our-mandate/weather/tropical-cyclones", "https://www.cdc.gov/disasters/hurricanes/index.html"], "images/hurricane2.jpg", "images/hurricane3.jpg", "https://www.youtube.com/embed/_iv5mTnM7ww?si=2EoGNzpjOuq94uih");

const placeholder = new Disaster("placeholder", "Disaster", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea exercitationem nemo vel deleniti dolore possimus voluptatum error fuga laboriosam porro, necessitatibus reiciendis corrupti fugit sit temporibus voluptate, enim labore.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea exercitationem nemo vel deleniti dolore possimus voluptatum error fuga laboriosam porro, necessitatibus reiciendis corrupti fugit sit temporibus voluptate, enim labore.", ["advice point 1", "advice point 2", "advice point 3", "advice point 4", "advice point 5"], ["risk factor 1", "risk factor 2", "risk factor 3"], ["https://www.example.com", "https://www.example.com", "https://www.example.com"], "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/uBXwLIM4Ryc?si=sc3a80wcSzGcj2Gn");

// "images/placeholder.jpg", "images/placeholder.jpg", "https://www.youtube.com/embed/ahotOBqUoKI"

const disasters = [];
disasters.push(earthquake);
disasters.push(tsunami);
disasters.push(hurricane);
disasters.push(placeholder);

const unusedDisasters = ["activeWarzone", "flood", "wildfire", "industrialAccident", "publicHealthEmergencies"];

// Get type parameter
const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const disasterType = params.get("type"); // get the type from url params
console.log("disaster: " + disasterType);

//  set which object to load
var queriedDisaster = disasters.find(d => d.type == disasterType) // returns the full object if matched

// check if disaster is unused
if (unusedDisasters.includes(disasterType)) {
    queriedDisaster = placeholder;
}

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
                        <h3>Here are 5 key advice points on what to do during an ${queriedDisaster.title}:</h3> 
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