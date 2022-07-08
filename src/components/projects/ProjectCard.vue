<template>
    <article class="project">
        <h2>{{ project.name }}</h2>
        <p class="short-description">
            {{ project.short_description }}
        </p>
        {{ project.description }}
        <footer>
            <MoreInfoButton @click="show" />
            <Tags :tags="project.tags"/>
        </footer>
    </article>
</template>

<script>
    import Tags from '../Tags.vue';
    import MoreInfoButton from '../MoreInfoButton.vue';
    
    export default {
        components: { Tags, MoreInfoButton },
        name: "ProjectCard",
        props: ['project',],
        methods: {
            show() {
                this.$emit('showMore');
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/_colors.scss";

    .project {
        background-color: $verd;
        padding: 15px 15px;
        display: flex;
        flex-direction: column;
        color: white;

    }

    footer {
        margin-top: auto;
    }

    .short-description { 
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 10px;
    }

</style>