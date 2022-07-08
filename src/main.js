import "./main.scss";

import { createApp } from "vue";

import App from "./App.vue";
import { showFullDescription } from "./modal.js";

createApp(App).mount("#app");

Array.from(document.querySelectorAll(".show-more")).forEach((project) => {
  project.onclick = (event) => {
    event.preventDefault();
    showFullDescription(project.hash);
  };
});
