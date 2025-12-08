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

const sea = new region('sea', 'South-East Asia', 'South-East Asia is a large region located south of China and east of the Indian subcontinent. It has a predominantly tropical, humid climate and is known for its dense forests, heavy monsoon seasons, and rich biodiversity. The area sits at the convergence of several minor tectonic plates, making it prone to earthquakes, volcanic eruptions, and tsunamis. It includes diverse and populous nations such as Indonesia, the Philippines, Vietnam, Thailand, and Malaysia.',
    ['Earthquakes', 'Typhoons', 'Tsunamis', 'Active Warzones - (Myanmar)', 'Public Health Emergencies'], ['disaster_info.html?type=earthquake','disaster_info.html?type=hurricane','disaster_info.html?type=tsunami','disaster_info.html?type=activeWarzone', 'disaster_info.html?type=publicHealthEmergencies'],
    'images/flood2.jpg', 'images/tsunami2.jpg'
)

const placeholder = new region(
    'placeholder',            
    'Placeholder Region',          
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',  
    ['Disaster 1', 'Disaster 2'],  
    ['index.html', 'index.html'],                    
    'images/placeholder1.jpg',     
    'images/placeholder2.jpg'      
);

const regions = []

regions.push(na)
regions.push(sea)
regions.push(placeholder)

const params = new URLSearchParams(window.location.search); // returns everything after ? in url
const reg = params.get("type"); // get the type from url params
console.log(reg);

//  set which object to load
let queriedregion = regions.find(d => d.type == reg) // returns the full object if matched
if (queriedregion) {
    console.log(queriedregion);
    console.log(queriedregion.description);
}

const regionContent = document.getElementById('regionContent')

function loadcontent() {
    if(queriedregion == undefined){
        queriedregion = placeholder
    }

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