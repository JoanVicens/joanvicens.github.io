<template>
    <article class="collaboration">
        <h2>{{ collaboration.name }}</h2>
        <p class="short-description">
            {{ collaboration.short_description }}
        </p>
        {{ collaboration.description }}
        <footer>
            <MoreInfoButton :href="collaboration.external_link" />
            <Tags :tags="collaboration.tags"/>
        </footer>
    </article>
</template>

<script>
    import Tags from '../Tags.vue';
    import MoreInfoButton from '../MoreInfoButton.vue';
    
    export default {
        components: { Tags, MoreInfoButton },
        name: "CollaborationCard",
        props: ['collaboration',]
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/_colors.scss";

    .collaboration {
        background-color: #fff;
        padding: 15px;
    }
    
    .short-description {
        font-weight: bold;
    }
</style>