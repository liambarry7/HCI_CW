class cardInfo {
    constructor(type, title, img) {
        this.type = type;
        this.title = title;
        this.img = img;
    }
}

const card1 = new cardInfo(
    "SevereBleeding",
    "Treating Severe Bleeding",
    "images/SevereBleeding.jpg"
);

const card2 = new cardInfo(
    "CPR",
    "Performing CPR (Adult & Child)",
    "images/CPR.jpg"
);

const card3 = new cardInfo(
    "Fractures",
    "Managing Fractures & Broken Bones",
    "images/fractures.jpg"
);

const card4 = new cardInfo(
    "Burns",
    "First Aid for Burns (Minor to Severe)",
    "images/burns.jpg"
);

const card5 = new cardInfo(
    "UnconsciousPerson",
    "Helping an Unconscious Person",
    "images/unconscious.jpg"
);

const card6 = new cardInfo(
    "Choking",
    "Choking: Adult, Child, and Infant",
    "images/choking.jpg"
);

const card7 = new cardInfo(
    "Shock",
    "Recognizing & Treating Shock",
    "images/shock.jpg"
);

const card8 = new cardInfo(
    "HeadInjury",
    "Dealing with Head & Spine Injuries",
    "images/head-injury.jpg"
);

const card9 = new cardInfo("EducationalContent", "Educational Content", "images/educationalcontent.jpg");



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