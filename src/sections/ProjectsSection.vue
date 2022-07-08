<template>
    <Section :emoji="'👨‍💻'" :name="'Projects'" id="projects">
        <ProjectsList/>
    </Section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Section from "../components/Section.vue";
import ProjectsList from "../components/projects/ProjectsList.vue";

export default defineComponent({
    name: "ProjectsSection",
    components: {
        Section,
        ProjectsList,
    },
})
</script>

<style lang="scss" scoped>
    @import "../styles/_colors.scss";

    Section {
        background: $gris;
        color: #fff;
    }
</style>