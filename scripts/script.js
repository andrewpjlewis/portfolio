const toTopBtn = document.querySelector("#scrollToTopBtn")

function scrollToTop() {
    window.scrollTo(0, 0);
}

toTopBtn.addEventListener("click", scrollToTop)

// DARK MODE TOGGLE
const darkModeToggle = document.querySelector("#darkmode-toggle")
const gitHubImage = document.querySelector(".github-mark")
const htmlImage = document.querySelector("#html")
const cssImage = document.querySelector("#css")
const jsImage = document.querySelector("#js")
const gitImage = document.querySelector("#git")
const arrow = document.querySelector("#scrollToTopBtn")
function toggleDarkMode() {
    // Log the current value of the dark mode toggle
    console.log("Current theme value:", darkModeToggle.value)
    if (darkModeToggle.checked) {
        console.log("Setting dark theme");
        document.body.classList.add("dark");
        gitHubImage.src = "images/github-mark-white.png";
        htmlImage.src = "images/html-dark.png";
        cssImage.src = "images/css-dark.png";
        jsImage.src = "images/js-dark.png";
        gitImage.src = "images/git-white.png";
        arrow.src = "images/teal-arrow-dark.png";
        // console.log("New Image Source:", gitHubImage.src)
    } 
    else {
        console.log("Setting light theme");
        document.body.classList.remove("dark");
        gitHubImage.src = "images/github-mark.png";
        htmlImage.src = "images/html.png";
        cssImage.src = "images/css.png";
        jsImage.src = "images/js.png";
        gitImage.src = "images/git.png";
        arrow.src = "images/teal-arrow.png";
    }
}
darkModeToggle.addEventListener("change", toggleDarkMode)