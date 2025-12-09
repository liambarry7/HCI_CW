const footer = document.getElementById("footer");

function loadFooter() {
    footer.innerHTML = `
        
            <div class="newsletter">
                <a href="newsletter-signup.html" class="newsletterLink">
                    <h2>Sign up to our newsletter here!</h2>
                </a>
            </div>

            <div class="footerGrid">
                <div class="footerLinks">
                    <h2>Disaster Information</h2>
                    <ul>
                        <li><a href="disaster_info.html?type=wildfire">Wildfires</a></li>
                        <li><a href="disaster_info.html?type=tsunami">Tsunamis</a></li>
                        <li><a href="disaster_info.html?type=earthquake">Earthquakes</a></li>
                        <li><a href="disaster_info.html?type=flood">Floods</a></li>
                        <li><a href="disaster_info.html?type=activeWarzone">Active Warzones</a></li>
                        <li><a href="disaster_info.html?type=industrialAccident">Industrial Accidents</a></li>
                        <li><a href="disaster_info.html?type=publicHealthEmergencies">Public Health Emergencies</a></li>
                        <li><a href="disaster_info.html?type=hurricane">Hurricanes & Typhoons</a></li>
                    </ul>
                </div>
                
                <div class="footerLinks">
                    <h2>Medical Advice</h2>
                    <ul>
                        <li><a href="ema_info.html?type=SevereBleeding">Treating Servere Bleeding</a></li>
                        <li><a href="ema_info.html?type=CPR">Performing CPR</a></li>
                        <li><a href="ema_info.html?type=Fractures">Managing Fractures & Broken Bones</a></li>
                        <li><a href="ema_info.html?type=Burns">First Aid for Burns</a></li>
                        <li><a href="ema_info.html?type=UnconsciousPerson">Helping an Unconscious Person</a></li>
                        <li><a href="ema_info.html?type=Choking">Choking</a></li>
                        <li><a href="ema_info.html?type=Shock">Recognising & Treating Shock</a></li>
                        <li><a href="ema_info.html?type=HeadInjury">Head & Spine Injuries</a></li>
                    </ul>
                </div>

                <div class="footerLinks">
                    <h2>Regional Information</h2>
                    <ul>
                        <li><a href="region_info.html?type=na">North America</a></li>
                        <li><a href="region_info.html?type=sea">South East Asia</a></li>
                        <li><a href="region_info.html?type=eur">Europe</a></li>
                        <li><a href="region_info.html?type=me">Middle East</a></li>
                        <li><a href="region_info.html?type=sa">South America</a></li>
                        <li><a href="region_info.html?type=wa">West Africa</a></li>
                        <li><a href="region_info.html?type=ea">East Africa</a></li>
                        <li><a href="region_info.html?type=ca">Central Asia</a></li>
                        <li><a href="region_info.html?type=eas">East Asia</a></li>
                    </ul>
                </div>

            </div>          

            <small><i>Copyright &copy; 2025 G13 Liam Barry, Luca Harper-Daude </i></small>
        
        `;               
}

window.addEventListener("DOMContentLoaded", loadFooter, false);
