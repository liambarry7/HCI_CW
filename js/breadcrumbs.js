document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbList = document.getElementById("breadcrumbList");

    const currentPage = formatPageName(window.location.pathname);

    if (isHomePage()) {
        sessionStorage.setItem("breadcrumbs", JSON.stringify(["Home"]));
    }

    let visited = JSON.parse(sessionStorage.getItem("breadcrumbs")) || ["Home"];

    if (!visited.includes(currentPage)) { //remove duplicates
    visited.push(currentPage);
    } else {
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


//check if current page is the home page for reset
function isHomePage() {
    const file = window.location.pathname.split("/").pop();
    return file === "" || file === "index.html"; 
}

function formatPageName(path) {
    let file = path.split("/").pop(); 
    if (file === "" || file === "index.html") return "Home";

    file = file.replace(".html", "");
    file = file.replace(/[-_]/g, " ");
    return capitalizeWords(file);
}

function pageToFile(name) {
    if (name === "Home") return "index.html";
    return name.toLowerCase().replace(/ /g, "_") + ".html";
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}
