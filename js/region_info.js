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
const queriedDisaster = regions.find(d => d.type == reg) // returns the full object if matched
if (queriedDisaster) {
    console.log(queriedDisaster);
    console.log(queriedDisaster.description);
}