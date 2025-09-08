function opentab(tabname) {
    var contents = document.querySelectorAll('.tab-contents');
    contents.forEach(function(content) {
        content.classList.remove('active-tab');
    });

    var links = document.querySelectorAll('.tab-links');
    links.forEach(function(link) {
        link.classList.remove('active-link');
    });

    document.getElementById(tabname).classList.add('active-tab');
    var activeLink = document.querySelector(`.tab-links[onclick="opentab('${tabname}')"]`);
    activeLink.classList.add('active-link');
}

// Initialize Swiper after the page is fully loaded
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,   // Number of slides visible at the same time
        spaceBetween: 30,    // Space between the slides
        loop: true,          // Looping the slides
        autoplay: {
            delay: 1500,     // Delay between auto sliding
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Allows you to click on pagination bullets
        },
    });
});