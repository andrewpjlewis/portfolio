const toTopBtn = document.querySelector("#scrollToTopBtn")

function scrollToTop() {
    window.scrollTo(0, 0);
}

toTopBtn.addEventListener("click", scrollToTop)

document.querySelector("#submitBtn").addEventListener("click", function() {
    alert('Thank you for submitting a recommendation!');
})
