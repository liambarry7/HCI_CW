document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbList = document.getElementById("breadcrumbList");

    // Get the URL path, split into sections
    const pathParts = window.location.pathname.split("/").filter(p => p);

    // Add "Home" as first breadcrumb
    let currentPath = "/";
    const homeCrumb = document.createElement("li");
    homeCrumb.innerHTML = `<a href="/">Home</a>`;
    breadcrumbList.appendChild(homeCrumb);

    // Build the rest dynamically
    pathParts.forEach((part, index) => {
        currentPath += part + "/";

        const li = document.createElement("li");

        const isLast = index === pathParts.length - 1;

        if (!isLast) {
            li.innerHTML = `<a href="${currentPath}">${formatName(part)}</a>`;
        } else {
            li.setAttribute("aria-current", "page");
            li.textContent = formatName(part);
        }

        breadcrumbList.appendChild(li);
    });
});

// Helper to format folder/file names
function formatName(name) {
    return name.replace(".html", "").replace("-", " ").replace("_", " ");
}