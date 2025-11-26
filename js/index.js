document.addEventListener("DOMContentLoaded", () => {
    const disaster = document.getElementById("disasterAdvice");
    const medical = document.getElementById("medicalAdvice");
    const regional = document.getElementById("regionalInfo");

    disaster.innerHTML = createBanner(
        "DISASTER ADVICE",
        "Learn what to do in emergency disaster situations.",
        "images/disaster.jpg",
        "disaster_advice.html"
    );

    medical.innerHTML = createBanner(
        "EMERGENCY MEDICAL ADVICE",
        "Find critical medical help and first-aid guidance.",
        "images/medical.png",
        "medical_advice.html"
    );

    regional.innerHTML = createBanner(
        "REGIONAL INFORMATION",
        "View local alerts and updates for your area.",
        "images/regional.jpg",
        "regional_info.html"
    );
});

function createBanner(title, text, image, link) {
    return `
        <a href="${link}" class="bannerLink">
            <div class="banner" style="background-image: url('${image}');">               

                <div class="bannerContent">
                    <h2>${title}</h2>
                    <p>${text}</p>
                </div>
            </div>
        </a>
    `;
}
