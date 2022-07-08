<template>
    <section>
        <ProjectDescription v-if="project" :project="project" @close="hide" ref="description" />
        <div class="projects-list">
            <ProjectCard 
                v-for="project in projects"
                :project="project"
                :key="project.name"
                @showMore="display(project)"
            />
        </div>
    </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProjectCard from "./ProjectCard.vue";
import ProjectDescription from "./ProjectDescription.vue";
import projects from "../../data/projects/projects.en.json";
import Section from '../Section.vue';

export default defineComponent({
    name: "ProjectsList",
    components: { ProjectCard, Section, ProjectDescription },
    methods: {
        display(project) {
            this.project = project;

            const descriptionTop = this.$refs["description"].offsetTop;
            window.scrollTo(0, descriptionTop);
        },
        hide() {
            this.project = null;
        }
    },
    data: () => ({
        projects,
        project: null,
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
