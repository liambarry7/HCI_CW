function simpleSearch() {
    // *** Only works on live server ***

    // add search icon to bar - https://www.w3schools.com/css/tryit.asp?filename=trycss_form_icon
    // add a search button to fire the search

    // get input from search bar - determine which id based on window size
    let searchID = null;
    if (screen.width > 1090) {
        // normal nav (non media query)
        searchID = "searchBar";
    } else {
        searchID = "smallSearchBar";
    }

    let query = document.getElementById(searchID).value;
    console.log("query " + query);

    // turn to all lowercase
    var querylc = query.toLowerCase();

    // check to see if matches a word (i.e. wildfire, cpr etc)
    // then take user to that page
    switch(querylc) {
        case "disaster":
        case "disasters":
            var loadPage = "disaster_advice.html";
            break;

        case "wildfire":
        case "wildfires":
            var loadPage = "disaster_info.html?type=wildfire";
            break;

        case "tsunami":
        case "tsunamis":
            var loadPage = "disaster_info.html?type=tsunami";
            break;

        case "earthquake":
        case "earthquakes":
            var loadPage = "disaster_info.html?type=earthquake";
            break;

        case "flood":
        case "floods":
            var loadPage = "disaster_info.html?type=flood";
            break;
        
        case "active warzone":
        case "active warzones":
            var loadPage = "disaster_info.html?type=activeWarzone";
            break;
        
        case "industrial accident":
        case "industrial accidents":
            var loadPage = "disaster_info.html?type=industrialAccident";
            break;

        case "public health emergency":
        case "public health emergencies":
            var loadPage = "disaster_info.html?type=publicHealthEmergencies";
            break;
        
        case "hurricane":
        case "hurricanes":
        case "typhoon":
        case "typhoons":
            var loadPage = "disaster_info.html?type=hurricane";
            break;

        case "medical":
            var loadPage = "ema.html";
            break;
        
        case "severe bleeding":
        case "treating severe bleeding":
            var loadPage = "ema_info.html?type=SevereBleeding";
            break;
        
        case "cpr":
        case "performing cpr":
        case "cpr adult":
        case "cpr child":
            var loadPage = "ema_info.html?type=CPR";
            break;
        
        case "fractures":
        case "broken bone":
        case "broken bones":
        case "managing fractures and broken bones":
            var loadPage = "ema_info.html?type=Fractures"

        case "burn":
        case "burns":
        case "minor burn":
        case "minor burns":
        case "severe burn":
        case "severe burns":
        case "first aid for burns":
            var loadPage = "ema_info.html?type=Burns";
            break;
        
        case "unconscious":
        case "unconscious person":
        case "helping an unconscious person":
            var loadPage = "ema_info.html?type=UnconsciousPerson"
            break;

        case "choking":
        case "choking adult":
        case "choking child":
        case "choking infant":
            var loadPage = "ema_info.html?type=Choking";
            break;

        case "shock":
        case "treating shock":
        case "recognising shock":
        case "recognising and treating shock":
            var loadPage = "ema_info.html?type=Shock";
            break;

        case "head injury":
        case "spine injury":
        case "head injuries":
        case "spine injuries":
        case "head and spine injuries":
            var loadPage = "ema_info.html?type=HeadInjury";
            break;

        case "region":
        case "regions":
            var loadPage = "regions.html";
            break;

        case "north america":
        case "usa":
        case "canada":
            var loadPage = "region_info.html?type=na";
            break;
        
        case "south east asia":
        case "indonesia":
        case "philippines":
            var loadPage = "region_info.html?type=sea";
            break;
      
        case "europe":
        case "uk":
        case "portugal":
            var loadPage = "region_info.html?type=eur";
            break;
            
        case "middle east":
        case "uae":
        case "jordan":
            var loadPage = "region_info.html?type=me";
            break;
        
        case "south america":
        case "brazil":
        case "argentina":
            var loadPage = "region_info.html?type=sa";
            break;
        
        case "west africa":
        case "nigeria":
            var loadPage = "region_info.html?type=wa";
            break;
        
        case "east africa":
        case "kenya":
        case "madagascar":
            var loadPage = "region_info.html?type=ea";
            break;
        
        case "central asia":
        case "uzbekistan":
            var loadPage = "region_info.html?type=ca";
            break;
        
        case "east asia":
        case "china":
        case "japan":
        case "north korea":
            var loadPage = "region_info.html?type=eas";
            break;

        case "newsletter":
        case "newsletters":
            var loadPage = "newsletter-signup.html";
            break;

        default:
            console.log("No match found.");
            break;
    }

    if (loadPage) {
        window.location.assign(loadPage);
    } else {
        alert("Search term not recognised.");
    }
    
}