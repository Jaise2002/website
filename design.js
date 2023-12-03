


const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    if (navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
    }
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
});



function scrollHeader() {
    const header = document.getElementById('header');
    window.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);


const typed = document.querySelector('.typed');


document.addEventListener("DOMContentLoaded", function () {
    // Get all section elements
    const sections = document.querySelectorAll("section");

    // Get menu links
    const menuLinks = document.querySelectorAll(".menu_link");

    // Function to update active link based on scroll position
    function updateActiveLink() {
        let currentScroll = document.documentElement.scrollTop;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 50; // Adjust the offset as needed

            if (
                currentScroll >= sectionTop &&
                (index === sections.length - 1 || currentScroll < sections[index + 1].offsetTop - 50)
            ) {
                // Remove "active" class from all links
                menuLinks.forEach(link => link.classList.remove("active-link"));

                // Add "active" class to the corresponding link
                menuLinks[index].classList.add("active-link");
            }
        });
    }

    // Add scroll event listener to update active link on scroll
    window.addEventListener("scroll", updateActiveLink);

    // Add click event listener to smooth scroll to the section when a menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 49, // Adjust the offset as needed
                    behavior: "smooth"
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get all section elements
    const sections = document.querySelectorAll("section");

    // Get menu links
    const menuLinks = document.querySelectorAll(".menu_link");

    // Get the "Skills" link specifically
    const skillsLink = document.querySelector('a[href="#Skills"]');

    // Function to update active link based on scroll position
    function updateActiveLink() {
        let currentScroll = document.documentElement.scrollTop;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 50; // Adjust the offset as needed

            if (
                currentScroll >= sectionTop &&
                (index === sections.length - 1 || currentScroll < sections[index + 1].offsetTop - 50)
            ) {
                // Remove "active" class from all links
                menuLinks.forEach(link => link.classList.remove("active-link"));

                // Add "active" class to the corresponding link
                menuLinks[index].classList.add("active-link");
            }
        });
    }

    // Add scroll event listener to update active link on scroll
    window.addEventListener("scroll", updateActiveLink);

    // Add click event listener to smooth scroll to the section when a menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 49, // Adjust the offset as needed
                    behavior: "smooth"
                });
            }
        });
    });

    // Add click event listener to smooth scroll to the "Skills" section when the "Skills" link is clicked
    skillsLink.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 49, // Adjust the offset as needed
                behavior: "smooth"
            });
        }
    });
});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
