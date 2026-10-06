// toggle icon navbar *****************//

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
});

// *******scroll section active link *****************//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="'+ id + '"]').classList.add('active');
            });
        };
    });

    // ****************stiky navbar *****************//

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // **************** remove toggle icon and navbar *****************//

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

  // **************** scroll reveal *****************//

   ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
    });

    ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolia-box , .contact form', { origin: 'buttom'});
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

  // **************** type js *****************//

const type = new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay: 1000,
    loop:true,
});


// *******************************Email js************************************
//  emailjs.init({
//     publicKey: "fiMlTr34Zjz6ZpgxJ"
// });

// const contactForm = document.querySelector("#contact-form");
// const formMessage = document.querySelector("#form-message");

// contactForm.addEventListener("submit", function (event) {

//     event.preventDefault();

//     formMessage.textContent = "Sending message...";

//     emailjs.sendForm(
//         "service_j309lqk",
//         "template_0ujxczf",
//         contactForm
//     )
//     .then(function (response) {

//         console.log("SUCCESS:", response);

//         formMessage.textContent = "Message sent successfully!";

//         contactForm.reset();

//     })
//     .catch(function (error) {

//         console.error("EMAILJS ERROR:", error);

//         formMessage.textContent =
//             `Error: ${error.text || error.message || "Unknown error"}`;

//     });

// });

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('form-message')

const sendEmail = async (e) => {
    //prevent the page reloading
    e.preventDefault()

    try {
        // serviceId - templateId- #form- PublicKey
        await emailjs.sendForm('service_y1ldxyj', 'template_hayzb0z', contactForm, 'yUwg7tTacj0wE-FEI')

        //show sent message
        contactMessage.textContent = 'Message sent successfully'

        //clear input field
        contactForm.reset('')
    } catch (error) {
        // show error message
        contactMessage.textContent = 'Message not sent (service error) ❌ '
        
    } finally {
        //Remove message after five second
        setTimeout(() => contactMessage.textContent = '' , 5000)
    }
    
}
contactForm.addEventListener('submit', sendEmail)
   