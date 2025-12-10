
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

// https://www.bbc.co.uk/safety/resources/aztopics/earthquakes
const earthquake = new Disaster("earthquake", "Earthquake", "Earthquakes can strike without warning, making preparation essential—especially for people living in high-risk areas such as countries along the Pacific Ring of Fire (including Japan, Indonesia, Chile, Mexico, and the U.S. West Coast), parts of South Asia, Turkey, Iran, and regions near major fault lines like the Himalayas and the Alpide Belt. If you live in or travel through these zones, secure heavy furniture, store fragile items on low shelves, and keep an emergency kit with water, food, flashlights, batteries, and first aid supplies. Establish a family communication plan and learn how to shut off your utilities safely.", "When shaking begins, remember to Drop, Cover, and Hold On: drop to the ground, take cover under sturdy furniture, and hold on until the movement stops. Indoors, stay put to avoid falling debris; outdoors, move away from buildings, power lines, and trees. After the shaking stops, expect aftershocks, check for injuries, and avoid damaged structures or areas with gas leaks. Use battery-powered radios or phones to get official updates, and follow emergency instructions from local authorities, especially in regions where strong aftershocks and infrastructure damage are common.", ["Drop, Cover, and Hold On — drop to your hands and knees, take cover under sturdy furniture, and hold on until the shaking stops.", "Stay indoors if you’re already inside — running outside during shaking increases the risk of injury from falling debris.", "Stay away from windows, mirrors, and glass to avoid shattering hazards.", "Protect your head and neck with your arms or a cushion if no shelter is nearby.", "If you’re outside, move to an open area away from buildings, streetlights, trees, and power lines."], ["Living near major fault lines — regions like the Pacific Ring of Fire or the Alpide Belt experience frequent seismic activity.", "Weak or poorly constructed buildings — older structures or those not built to seismic standards are more likely to collapse.", "Soft or unstable ground conditions — areas prone to liquefaction or landslides can amplify damage during a quake."], ["https://www.ready.gov/earthquakes", "https://earthquake.usgs.gov", "https://www.ifrc.org/disaster-preparedness"], "images/earthquake2.jpg", "images/earthquake3.jpg", "https://www.youtube.com/embed/I0ureVMVzP8?si=CNOwJ0chtrxpgYQ8");

// https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/tsunami.html#:~:text=If%20your%20community%20does%20not,tsunami%20could%20follow%20an%20earthquake.
const tsunami = new Disaster("tsunami", "Active Warzone", "Active warzone disasters occur when armed conflicts create immediate threats to human life, infrastructure, and access to essential services. Unlike natural disasters, these emergencies are driven by human activity—such as bombings, artillery attacks, armed clashes, and sieges—that can destroy homes, schools, hospitals, and critical infrastructure. Civilians are often forced to flee, resulting in mass displacement, overcrowded refugee camps, and shortages of food, clean water, and medical care. The impact is compounded by the breakdown of governance and emergency services, leaving affected populations highly vulnerable to secondary crises such as disease outbreaks, malnutrition, and psychological trauma.", "Warzone disasters are most common in regions experiencing prolonged armed conflict, political instability, or civil war. Currently, areas such as parts of Syria, Yemen, and Ukraine face severe humanitarian crises due to ongoing hostilities. Sub-Saharan Africa also has multiple hotspots, including regions of the Sahel, where conflicts in countries like Mali, Burkina Faso, and South Sudan have caused large-scale displacement and food insecurity. In addition, parts of the Middle East—including Iraq and Afghanistan—have experienced repeated episodes of conflict that devastate communities and limit recovery. These regions are particularly vulnerable because prolonged fighting not only destroys infrastructure but also hinders the delivery of humanitarian aid and reconstruction efforts.", ["Stay informed: Follow reliable news sources, official alerts, and humanitarian organization updates to understand risks and safe routes.", "Have an emergency plan: Identify safe locations, evacuation routes, and meeting points for family members in case of sudden attacks.", "Keep essential supplies ready: Include water, non-perishable food, medications, important documents, first-aid kits, and communication devices.", "Seek shelter immediately during attacks: Use reinforced buildings, basements, or designated safe zones, and avoid open areas.", "Avoid conflict zones whenever possible: Limit travel through high-risk areas, and coordinate with local authorities or humanitarian organizations if evacuation is needed."], ["Proximity to conflict zones: Living near areas of active fighting, shelling, or military operations greatly increases the risk of injury, displacement, or death.", "Weak infrastructure and governance: Regions with poor governance, limited emergency services, and damaged infrastructure are less able to protect civilians and respond to crises.", "High population density in conflict areas: Crowded urban centers or refugee camps are more vulnerable to collateral damage, shortages of food and water, disease outbreaks, and rapid spread of violence."], ["https://civiliansinconflict.org/tools/toolkit-advancing-protection-of-civilians-in-conflict/", "https://globalprotectioncluster.org/themes/protection_civilians", "https://www.icrc.org/en/law-and-policy/protected-persons-civilians"], "images/activeWarzone2.jpg", "images/activeWarzone3.jpg", "https://www.youtube.com/embed/if99L1Oq-5w?si=NP837fKQh4QD0OMW");

//  https://www.ready.gov/hurricanes
const hurricane = new Disaster("hurricane", "Hurricane  & Typhoon", "Hurricane and typhoon disasters are powerful tropical storms characterized by strong winds, heavy rainfall, and storm surges that can devastate coastal and inland areas. These storms form over warm ocean waters, typically between 5° and 20° latitude from the equator, where sea surface temperatures provide the energy needed for their development. As hurricanes or typhoons move toward land, they can cause widespread flooding, wind damage to buildings and infrastructure, and erosion of coastlines. In addition to physical destruction, these storms often disrupt electricity, transportation, and water supply systems, creating secondary hazards such as waterborne disease outbreaks and long-term economic losses.", "Hurricanes and typhoons are most common in tropical and subtropical regions, but the terminology differs by location: storms in the Atlantic and Northeast Pacific are called hurricanes, while those in the Northwest Pacific are called typhoons. The Caribbean, Gulf of Mexico, and southeastern United States frequently experience hurricanes, particularly during the Atlantic hurricane season from June to November. Southeast Asia, including the Philippines, Taiwan, Japan, and coastal areas of China, is prone to typhoons, especially between July and October. The Indian Ocean region, including India, Bangladesh, and Myanmar, also faces tropical cyclones that produce storm surges and flooding in densely populated coastal areas. Islands in the Pacific and Caribbean are particularly vulnerable due to their small land area, high exposure to storm surges, and limited evacuation routes.", ["Stay informed: Monitor weather forecasts, alerts, and official warnings from meteorological agencies.", "Prepare an emergency kit: Include water, non-perishable food, medications, important documents, flashlights, batteries, and a first-aid kit.", "Secure your home: Reinforce windows and doors, bring outdoor furniture indoors, and clear drains to reduce flooding risk.", "Have an evacuation plan: Know safe routes, nearby shelters, and transportation options in case evacuation orders are issued.", "Follow official instructions: Evacuate immediately if advised, avoid floodwaters, and stay away from downed power lines or debris during and after the storm."], ["Coastal location: Living near the coast increases exposure to storm surges, high winds, and flooding.", "Poor infrastructure or weak building standards: Areas with unreinforced buildings, inadequate drainage, or weak levees are more vulnerable to damage.", "High population density: Crowded cities and towns amplify the impact of flooding, complicate evacuations, and increase potential casualties."], ["https://public.wmo.int/en/our-mandate/weather/tropical-cyclones", "https://www.cdc.gov/disasters/hurricanes/index.html", "https://www.ready.gov/hurricanes"], "images/hurricane2.jpg", "images/hurricane3.jpg", "https://www.youtube.com/embed/_iv5mTnM7ww?si=2EoGNzpjOuq94uih");

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