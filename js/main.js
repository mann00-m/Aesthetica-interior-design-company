
const navbar = document.querySelector(".rosette-navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});


AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});



const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("clientName").value.trim();
    const email = document.getElementById("clientEmail").value.trim();
    const type = document.getElementById("projectType").value;
    const message = document.getElementById("clientMessage").value.trim();

    const subject = encodeURIComponent("New Project Enquiry - ROSETTE");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${type}\nMessage: ${message}`
    );

    window.location.href =
      `mailto:hello@rosette.design?subject=${subject}&body=${body}`;
  });
}




/* ============ ROSETTE SERVICE MODAL JS ============ */

const serviceData = {
  interior: {
    number: "01",
    title: "Interior Designing",
    description: "We create stylish and functional interiors that reflect your personality, lifestyle and vision.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200",
    options: [
      "Residential Interiors",
      "Commercial Interiors",
      "Bedroom Design",
      "Living Room Design",
      "Kitchen Design",
      "Bathroom Design"
    ]
  },

  design: {
    number: "02",
    title: "2D & 3D Design",
    description: "Visualize your dream space with detailed floor plans, furniture layouts and realistic 3D concepts.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1200",
    options: [
      "2D Floor Plans",
      "3D Floor Plans",
      "3D Interior Rendering",
      "Furniture Layouts",
      "Lighting Visualization",
      "Material Selection"
    ]
  },

  turnkey: {
    number: "03",
    title: "Turnkey Solutions",
    description: "Complete interior transformation, from initial planning and material selection to final execution.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1200",
    options: [
      "Design & Planning",
      "Material Procurement",
      "Civil & Electrical Work",
      "Furniture Installation",
      "False Ceiling Work",
      "Complete Execution"
    ]
  },

  wallart: {
    number: "04",
    title: "Wall Art & Murals",
    description: "Give your walls a distinctive identity with creative artwork and personalized visual concepts.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=1200",
    options: [
      "Custom Wall Murals",
      "3D Wall Panels",
      "Decorative Wallpapers",
      "Textured Walls",
      "Feature Walls",
      "Custom Wall Art"
    ]
  },

  color: {
    number: "05",
    title: "Color Consultation",
    description: "Discover harmonious color combinations that enhance your interiors and create the right atmosphere.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=1200",
    options: [
      "Wall Color Selection",
      "Interior Color Palettes",
      "Furniture Color Matching",
      "Lighting & Mood Planning",
      "Material Combinations",
      "Accent Wall Colors"
    ]
  },

  furniture: {
    number: "06",
    title: "Furniture Design",
    description: "Explore furniture concepts designed around your space, combining comfort, functionality and aesthetics.",
    image: "https://images.unsplash.com/photo-1598300053653-4b6b9c7b7b2c?q=85&w=1200",
    options: [
      "Custom Sofa Design",
      "Modular Wardrobes",
      "Kitchen Cabinets",
      "TV Units",
      "Office Furniture",
      "Custom Storage"
    ]
  },

  supervision: {
    number: "07",
    title: "Site Supervision",
    description: "Maintain quality and consistency through careful on-site coordination and execution monitoring.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1200",
    options: [
      "Work Progress Monitoring",
      "Quality Inspection",
      "Material Inspection",
      "Contractor Coordination",
      "Execution Monitoring",
      "Final Finishing Check"
    ]
  },

  space: {
    number: "08",
    title: "Space Planning",
    description: "Make every corner count with thoughtful layouts that maximize usable space and functionality.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1200",
    options: [
      "Furniture Arrangement",
      "Room Layout Planning",
      "Storage Optimization",
      "Small Space Solutions",
      "Office Space Planning",
      "Movement & Flow Planning"
    ]
  }
};

// const serviceModal = document.getElementById("serviceModal");

// if (serviceModal) {
//   const modalTitle = document.getElementById("modalTitle");
//   const modalNumber = document.getElementById("modalNumber");
//   const modalDescription = document.getElementById("modalDescription");
//   const modalImage = document.getElementById("modalImage");
//   const modalOptions = document.getElementById("modalOptions");

//   let previousFocus = null;

//   function openServiceModal(key, trigger) {
//     const service = serviceData[key];
//     if (!service) return;

//     previousFocus = trigger;

//     modalNumber.textContent = `${service.number} — OUR SERVICES`;
//     modalTitle.textContent = service.title;
//     modalDescription.textContent = service.description;
//     modalImage.src = service.image;
//     modalImage.alt = service.title;

//     modalOptions.replaceChildren();

//     service.options.forEach(option => {
//       const button = document.createElement("button");

//       button.type = "button";
//       button.className = "modal-option";
//       button.textContent = option;
//       button.setAttribute("aria-pressed", "false");

//       button.addEventListener("click", () => {
//         const selected = button.classList.toggle("selected");
//         button.setAttribute("aria-pressed", String(selected));
//       });

//       modalOptions.appendChild(button);
//     });

//     serviceModal.hidden = false;
//     document.body.classList.add("modal-open");

//     serviceModal.querySelector(".modal-close").focus();
//   }

//   function closeServiceModal() {
//     if (serviceModal.hidden) return;

//     serviceModal.hidden = true;
//     document.body.classList.remove("modal-open");

//     previousFocus?.focus();
//   }

//   // Open selected service
//   document.querySelectorAll(".service-link[data-service]").forEach(button => {
//     button.addEventListener("click", () => {
//       openServiceModal(button.dataset.service, button);
//     });
//   });

//   // Close button and background click
//   serviceModal.querySelectorAll("[data-close-modal]").forEach(element => {
//     element.addEventListener("click", closeServiceModal);
//   });

//   // Escape key
//   document.addEventListener("keydown", event => {
//     if (event.key === "Escape") {
//       closeServiceModal();
//     }
//   });

//   // Close details button - does not touch contact section
//   document.getElementById("modalEnquire")?.addEventListener("click", closeServiceModal);
// }



// // Keep service modal directly inside body
// const modalElement = document.getElementById("serviceModal");

// if (modalElement && modalElement.parentElement !== document.body) {
//     document.body.appendChild(modalElement);
// }





// Keep service modal directly inside body
const modalElement = document.getElementById("serviceModal");

if (modalElement && modalElement.parentElement !== document.body) {
    document.body.appendChild(modalElement);
}


// SERVICE MODAL
const serviceModal = document.getElementById("serviceModal");

if (serviceModal) {

    const modalTitle = document.getElementById("modalTitle");
    const modalNumber = document.getElementById("modalNumber");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");
    const modalOptions = document.getElementById("modalOptions");

    const modalBack = document.getElementById("modalBack");
    const modalEnquire = document.getElementById("modalEnquire");

    let previousFocus = null;


    // OPEN MODAL
    function openServiceModal(key, trigger) {

        const service = serviceData[key];

        if (!service) return;

        previousFocus = trigger;

        modalNumber.textContent = `${service.number} — OUR SERVICES`;
        modalTitle.textContent = service.title;
        modalDescription.textContent = service.description;

        modalImage.src = service.image;
        modalImage.alt = service.title;

        modalOptions.replaceChildren();

        service.options.forEach(option => {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "modal-option";
            button.textContent = option;
            button.setAttribute("aria-pressed", "false");

            button.addEventListener("click", () => {

                const selected = button.classList.toggle("selected");

                button.setAttribute("aria-pressed", String(selected));

            });

            modalOptions.appendChild(button);

        });

        serviceModal.hidden = false;

        document.body.classList.add("modal-open");

        serviceModal.querySelector(".modal-close")?.focus();

    }


    // CLOSE MODAL
    function closeServiceModal() {

        if (serviceModal.hidden) return;

        serviceModal.hidden = true;

        document.body.classList.remove("modal-open");

        previousFocus?.focus();

    }


    // OPEN SELECTED SERVICE
    document.querySelectorAll(".service-link[data-service]").forEach(button => {

        button.addEventListener("click", () => {

            openServiceModal(button.dataset.service, button);

        });

    });


    // CLOSE BUTTON AND BACKGROUND CLICK
    serviceModal.querySelectorAll("[data-close-modal]").forEach(element => {

        element.addEventListener("click", closeServiceModal);

    });


    // ESCAPE KEY
    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeServiceModal();

        }

    });


    // BACK BUTTON
    modalBack?.addEventListener("click", () => {

        closeServiceModal();

        document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });


    // CONTINUE BUTTON
    modalEnquire?.addEventListener("click", () => {

        const selectedServices = Array.from(
            modalOptions.querySelectorAll(".modal-option.selected")
        ).map(option => option.textContent);

        if (selectedServices.length === 0) {

            alert("Please select at least one service to continue.");

            return;

        }


        // Save selected services
        sessionStorage.setItem(
            "rosetteSelectedServices",
            JSON.stringify(selectedServices)
        );


        closeServiceModal();


        // Scroll to contact section
        const contactSection = document.getElementById("contact");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}


// ROSETTE PRELOADER

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (!preloader) return;

    document.body.classList.add("preloader-active");

    const timeline = gsap.timeline({
        onComplete: () => {
            preloader.remove();
            document.body.classList.remove("preloader-active");
        }
    });

    timeline
        .to(".preloader-logo", {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        })

        .to(".preloader-tagline", {
            opacity: 1,
            duration: 0.6
        }, "-=0.3")

        .to(".preloader-line span", {
            scaleX: 1,
            duration: 1.4,
            ease: "power2.inOut"
        })

        .to(".preloader-loading", {
            opacity: 1,
            duration: 0.4
        }, "-=1")

        .to(".preloader-content", {
            y: -20,
            opacity: 0,
            duration: 0.5
        }, "+=0.2")

        .to("#preloader", {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut"
        });

});