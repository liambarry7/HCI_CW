class cardInfo {
    constructor(type, title, img) {
        this.type = type;
        this.title = title;
        this.img = img;
    }
}

card1 = new cardInfo('na', 'North America', 'images/na.jpg')
card2 = new cardInfo('sea', 'South-East Asia', 'images/sea.jpg')
card3 = new cardInfo('eur', 'Europe', 'images/eur.jpg')
card4 = new cardInfo('me', 'Middle East','images/me.jpg')
card5 = new cardInfo('sa', 'South America', 'images/sa.jpg')
card6 = new cardInfo('wa', 'West Africa', 'images/wa.jpg')
card7 = new cardInfo('ea', 'East Africa', 'images/ea.jpg')
card8 = new cardInfo('ca', 'Central Asia', 'images/ca.jpg')
card9 = new cardInfo('eas', 'East Asia', 'images/eas.jpg')

const regions = []

regions.push(card1)
regions.push(card2)
regions.push(card3)
regions.push(card4)
regions.push(card5)
regions.push(card6)
regions.push(card7)
regions.push(card8)
regions.push(card9)

wrapperContent = document.getElementById('disasterWrapper')

function loadContent() {
    let displayItem = regions.map( (item) => {
        if (item.type != "educational") {
            return `
            <div class="disasterCard">
                <a href="region_info.html?type=${item.type}">
                    <img src="${item.img}" class="disasterCardImage">
                    <div class="disasterContainer">
                        <h4><b>${item.title}</b></h4>
                    </div>
                </a>
            </div>
            `;
        } else {
            return `
            <div class="disasterCard">
                <a href="${item.type}.html">
                    <img src="${item.img}" class="disasterCardImage">
                    <div class="disasterContainer">
                        <h4><b>${item.title}</b></h4>
                    </div>
                </a>
            </div>
            `;
        }
        
    })
    displayItem = displayItem.join("");
    // console.log(displayItem);
    wrapperContent.innerHTML = displayItem;
}

window.addEventListener("DOMContentLoaded", loadContent, false);