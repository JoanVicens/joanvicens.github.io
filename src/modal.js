import Glide from "@glidejs/glide";

const imageViewNode = document.getElementById("img-view");

const imageViewComponent = {
  background: imageViewNode,
  content_wrapper: imageViewNode.querySelector(".content-wrapper"),
  glide_wrapper: imageViewNode.querySelector(".glide-wrapper"),
  close_btn: imageViewNode.querySelector(".close-img-view"),
};

const projects_section = document.getElementById("projects");

function projectfullScreen(modal, img_index) {
  // Full screen nodes
  const project = {
    content: modal.querySelector(".content"),
    tags: modal.querySelector(".tags"),
    glide: modal.querySelector(".glide"),
    slides: modal.querySelectorAll("li.glide__slide"),
  };

  // Shows the main container in the current position
  imageViewComponent.background.style.display = "block";
  scroll(0, 0);

  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";

  // Copies the carousel
  const glide = project.glide.cloneNode(true);
  // and if the images are not small, adds the controls
  if (!glide.classList.contains("small")) {
    const control_div = document.createElement("div");
    control_div.classList.add("glide__bullets");
    control_div.setAttribute("data-glide-el", "controls[nav]");

    for (let i = 0; i < project.slides.length; i++) {
      const btn = document.createElement("button");
      btn.classList.add("glide__bullet");
      btn.setAttribute("data-glide-dir", `=${i}`);

      control_div.appendChild(btn);
    }

    // Adds the new carousel and the description to the view
    glide.appendChild(control_div);
  }

  imageViewComponent.content_wrapper.appendChild(
    project.content.cloneNode(true)
  );
  imageViewComponent.content_wrapper.appendChild(project.tags.cloneNode(true));
  imageViewComponent.glide_wrapper.appendChild(glide);

  // Starts the new carousel
  new Glide("#img-view .glide", {
    type: "slides",
    startAt: img_index || 0,
    perView: glide.classList.contains("small") ? project.slides.length : 1,
    gap: 30,
    autoplay: 5000,
    hoverpause: true,
  }).mount();

  // Set up close button
  imageViewComponent.close_btn.onclick = () => {
    // Empties the containers for the next one
    imageViewComponent.content_wrapper.innerHTML = "";
    imageViewComponent.glide_wrapper.innerHTML = "";

    // Hides the main container
    imageViewComponent.background.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    modal.scrollIntoView();
  };
}

export function showFullDescription(hash) {
  // Hiddes the previous descriptions
  const projects_descriptions = Array.from(
    document.querySelectorAll(".project-description")
  );
  projects_descriptions.forEach((project) => (project.style.display = "none"));

  // Gets the new description node, shows it and sets the carousel and the buttons
  const modal = document.querySelector(hash);

  if (modal) {
    // Node visibility
    modal.classList.remove("animate__fadeOutDown");
    modal.classList.add("animate__fadeInUp");
    modal.style.display = "block";
    projects_section.scrollIntoView();

    // Carousel
    const carousel = modal.querySelector(".glide");
    const images_carousel = carousel.querySelectorAll("img");

    if (carousel) {
      new Glide(`${hash} .glide`, {
        type: "slides",
        startAt: 0,
        perView: images_carousel.length,
      }).mount();
    }

    Array.from(images_carousel).forEach(
      (image) =>
        (image.onclick = (event) => {
          const image_clicked = Array.from(images_carousel).indexOf(
            event.target
          );
          projectfullScreen(modal, image_clicked);
        })
    );

    // Buttons
    const expand_btn = document.querySelector(`${hash} .expand`);
    if (expand_btn) {
      expand_btn.onclick = () => {
        projectfullScreen(modal);
      };
    }

    document.querySelector(`${hash} .close`).onclick = () => {
      modal.classList.remove("animate__fadeInUp");
      modal.classList.add("animate__fadeOutDown");
      modal.addEventListener("animationend", function handler(e) {
        e.currentTarget.removeEventListener(e.type, handler);
        setTimeout(function () {
          modal.style.display = "none";
        }, 400);
      });

      projects_section.scrollIntoView();
    };
  }
}
