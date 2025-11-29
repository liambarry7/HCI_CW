class cardInfo {
    constructor(type, title, img) {
        this.type = type;
        this.title = title;
        this.img = img;
    }
}
/*
const card1 = new cardInfo("Wildfire", "Wildfire Advice", "images/wildfire.jpg");
const card2 = new cardInfo("Tsunami", "Tsunami Advice", "images/tsunami.jpg");
const card3 = new cardInfo("Earthquake", "Earthquake Advice", "images/earthquake.jpg");
const card4 = new cardInfo("Flood", "Flood Advice", "images/flood.jpg");
const card5 = new cardInfo("ActiveWarzone", "Active Warzone Advice", "images/activewarzone.jpg");
const card6 = new cardInfo("IndustrialAccident", "Industrial Accident Advice", "images/industrialaccident.jpeg");
const card7 = new cardInfo("PublicHealthEmergencies", "Public Health Emergencies Advice", "images/publichealthemergencies.jpg");
const card8 = new cardInfo("Hurricane", "Hurricane Advice", "images/hurricane.jpg");
const card9 = new cardInfo("EducationalContent", "Educational Content", "images/educationalcontent.jpg");
*/


const cards = []
cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);
cards.push(card6);
cards.push(card7);
cards.push(card8);
cards.push(card9);

const wrapperContent = document.getElementById("disasterWrapper");

function loadContent() {
    let displayItem = cards.map( (item) => {
        return `
        <div class="disasterCard">
            <a href="disaster_info.html?type=${item.type}">
                <img src="${item.img}" class="disasterCardImage">
                <div class="disasterContainer">
                    <h4><b>${item.title}</b></h4>
                </div>
            </a>
        </div>
        `;
    })
    displayItem = displayItem.join("");
    // console.log(displayItem);
    wrapperContent.innerHTML = displayItem;
}

window.addEventListener("DOMContentLoaded", loadContent, false);