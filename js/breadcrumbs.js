document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbList = document.getElementById("breadcrumbList");

    // Detect current page
    const currentPage = formatPageName(window.location.pathname);

    if (isHomePage()) {
        sessionStorage.setItem("breadcrumbs", JSON.stringify(["Home"]));
    }

    // Load breadcrumbs (after possible reset)
    let visited = JSON.parse(sessionStorage.getItem("breadcrumbs")) || ["Home"];

    if (!visited.includes(currentPage)) {
    visited.push(currentPage);
    } else {
        // Remove duplicates and re-append current page at the end (correct order)
        visited = visited.filter(page => page !== currentPage);
        visited.push(currentPage);
    }


    sessionStorage.setItem("breadcrumbs", JSON.stringify(visited));


    breadcrumbList.innerHTML = "";
    visited.forEach((page, index) => {
        const li = document.createElement("li");
        const isLast = index === visited.length - 1;

        if (isLast) {
            li.textContent = page;
            li.setAttribute("aria-current", "page");
        } else {
            const fileName = pageToFile(page);
            li.innerHTML = `<a href="${fileName}">${page}</a>`;
        }

        breadcrumbList.appendChild(li);
    });
});


// --- Helper Functions ---

// Check if current page is the home page
function isHomePage() {
    const file = window.location.pathname.split("/").pop();
    return file === "" || file === "index.html"; 
}

// Convert file path → readable name
function formatPageName(path) {
    let file = path.split("/").pop(); 
    if (file === "" || file === "index.html") return "Home";

    file = file.replace(".html", "");
    file = file.replace(/[-_]/g, " ");
    return capitalizeWords(file);
}

// Convert name back into its file link
function pageToFile(name) {
    if (name === "Home") return "index.html";
    return name.toLowerCase().replace(/ /g, "_") + ".html";
}

// Capitalize each word
function capitalizeWords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}
