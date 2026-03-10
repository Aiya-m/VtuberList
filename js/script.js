const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
    })
})

document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el)
})

function goTolistPage(comp){
    window.location.href = "/page/List.html?comp=" + comp;
}