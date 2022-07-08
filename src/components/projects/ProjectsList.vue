<template>
    <section class="projects-list">
        <ProjectCard 
            v-for="project in projects"
            :project="project"
            :key="project.name"
            v-model:show="displayProject"
        />
    </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProjectCard from "./ProjectCard.vue";
import projects from "../../data/projects/projects.en.json";
import Section from '../Section.vue';

export default defineComponent({
    name: "ProjectsList",
    components: { ProjectCard, Section },
    data: () => ({
        projects
    }),
});
</script>

<style lang="scss" scoped>
    .projects-list {
        display: grid;
        gap: 32px;
        grid-auto-rows: 20rem;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
</style>
