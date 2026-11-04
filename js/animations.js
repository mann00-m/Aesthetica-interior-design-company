
gsap.registerPlugin(ScrollTrigger);

// Hero content animation
const heroTimeline = gsap.timeline();

heroTimeline
    .from(".hero-label", {
        y: 30,
        opacity: 0,
        duration: 0.8
    })
    .from(".hero-content h1", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })
    .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8
    })
    .from(".hero-button", {
        y: 20,
        opacity: 0,
        duration: 0.7
    })
    .from(".hero-bottom span", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6
    });

// Hero background zoom
gsap.from(".hero-section", {
    scale: 1.08,
    duration: 2,
    ease: "power2.out"
});



/* SCROLL REVEAL ANIMATIONS */

gsap.utils.toArray([
  ".about-section",
  ".projects-section",
  ".services-section",
  ".contact-section",
  ".rosette-footer"
]).forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 45,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      once: true
    }
  });
});

/* IMAGE REVEAL */

gsap.utils.toArray(".project-image img, .about-image").forEach((image) => {
  gsap.from(image, {
    opacity: 0,
    scale: 1.08,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: image,
      start: "top 90%",
      once: true
    }
  });
});
