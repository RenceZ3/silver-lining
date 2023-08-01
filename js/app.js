const getFades = document.querySelectorAll(".fade-in");

const optionAppear = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};

const showContentScroll = new IntersectionObserver(
    function(entries, optionAppear) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }else {
                entry.target.classList.add("appear");
                showContentScroll.unobserve(entry.target);
            }
        });

}, optionAppear);

getFades.forEach(fade => {
    showContentScroll.observe(fade);
});

function goToAboutPage() {
    window.location.href = "about.html"
}