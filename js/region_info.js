class region {
    constructor(type, title, desc1, potentialDisasters, usefulLinks, img1, img2) {
        this.type = type;
        this.title = title;
        this.desc1 = desc1;
        this.disasters = potentialDisasters
        this.usefulLinks = usefulLinks;
        this.img1 = img1;
        this.img2 = img2;
    }
}

const na = new region('na', 'North America', 'North America is a continent located in the western hemisphere, it is largely covered in woodlands and is surrounded by the pacific and atlantic oceans. The largest, most populous counties in this region are the USA, Canada and Mexico, all of which cover a large geographic area and have an extremely diverse climate',
    ['Wildfires', 'Hurricanes', 'Industrial Accidents'], ['disaster_info.html?type=wildfire','disaster_info.html?type=hurricane', 'disaster_info.html?type=industrialAccident'],
    'images/hurricane2.jpg', 'images/wildfire3.jpg'
)

const regions = []

regions.push(na)

const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const reg = params.get("type"); // get the type from url params
console.log(reg);

//  set which object to load
const queriedregion = regions.find(d => d.type == reg) // returns the full object if matched
if (queriedregion) {
    console.log(queriedregion);
    console.log(queriedregion.description);
}

const regionContent = document.getElementById('regionContent')

function loadcontent() {

    const disasterLinks = queriedregion.disasters.map((disaster, i) => {
        return `<li><a href="${queriedregion.usefulLinks[i]}">${disaster}</a></li>`;
    }).join('');

    regionContent.innerHTML = `
        <h2>${queriedregion.title}</h2>

        <div class="region-images">
            <img src="${queriedregion.img1}">
            <img src="${queriedregion.img2}">
        </div>

        <p class="region-description">${queriedregion.desc1}</p>

        <div class="disaster-section">
            <h3>Potential Disasters</h3>
            <ul>
                ${disasterLinks}
            </ul>
        </div>
    `;
}

window.addEventListener("DOMContentLoaded", loadcontent, false);