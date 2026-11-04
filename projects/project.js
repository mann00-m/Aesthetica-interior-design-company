
const projects = {
  1: {
    title: "Serene Residence",
    category: "RESIDENTIAL INTERIOR",
    location: "Bhopal, India",
    type: "Luxury Residence",
    year: "2026",
    headline: "A calm retreat designed for modern living.",
    description: "A contemporary residential concept where warm textures, natural light and thoughtful detailing come together to create a comfortable and timeless living experience.",
    hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=90&w=2000",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1400",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1400",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1400"
    ]
  },

  2: {
    title: "The Modern Abode",
    category: "CONTEMPORARY LIVING",
    location: "Delhi, India",
    type: "Modern Apartment",
    year: "2026",
    headline: "Where simplicity meets sophistication.",
    description: "An illustrative modern apartment concept featuring clean architectural lines, refined materials and a balanced neutral palette for an elegant everyday lifestyle.",
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=2000",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1400",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1400",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1400",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1400"
    ]
  },

  3: {
    title: "Urban Workspace",
    category: "COMMERCIAL INTERIOR",
    location: "Gurugram, India",
    type: "Office Workspace",
    year: "2026",
    headline: "A workspace built around creativity.",
    description: "An illustrative commercial interior concept focused on productivity, collaboration and a welcoming atmosphere through functional planning and contemporary design.",
    hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=90&w=2000",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=85&w=1400",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=1400",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1400",
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=85&w=1400"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id") || "1";
const project = projects[projectId] || projects[1];

document.title = `${project.title} | ROSETTE`;

document.getElementById("projectTitle").textContent = project.title;
document.getElementById("projectCategory").textContent = project.category;
document.getElementById("projectLocation").textContent = project.location;
document.getElementById("projectHeadline").textContent = project.headline;
document.getElementById("projectDescription").textContent = project.description;
document.getElementById("projectMetaLocation").textContent = project.location;
document.getElementById("projectMetaType").textContent = project.type;
document.getElementById("projectYear").textContent = project.year;

document.getElementById("projectHeroImage").style.backgroundImage =
  `url("${project.hero}")`;

const gallery = document.getElementById("projectGallery");

project.images.forEach((image, index) => {
  gallery.innerHTML += `
    <div class="col-lg-6 gallery-item">
      <img
        src="${image}"
        alt="${project.title} interior view ${index + 1}"
        class="gallery-image"
        loading="lazy"
      >
    </div>
  `;
});


