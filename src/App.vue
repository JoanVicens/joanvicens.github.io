<script>
import CollaborationsSection from "./sections/CollaborationsSection.vue";
import ContactSection from "./sections/ContactSection.vue";
import FooterSection from "./sections/FooterSection.vue";
import Header from "./sections/Header.vue";
import ProjectsSection from "./sections/ProjectsSection.vue";

  export default {
    components: { 
      ProjectsSection,
      CollaborationsSection,
      ContactSection,
      FooterSection,
      Header 
    }
  }

</script>

<template>
  <Header  />
  <ProjectsSection />
  <CollaborationsSection />
  <ContactSection />
  <FooterSection />
</template>
