<template>
    <article class="description">
        <div class="close" @click="close">X</div>
        <div class="content">
            <h2>{{ project.name }}</h2>
            <div v-html="project.html"></div>
        </div>

        <Carrousel :images="project.images" /> 

        <Tags :tags="project.tags"/>
    </article>
</template>

<script>
    import Tags from '../Tags.vue';
    import Carrousel from '../Carrousel.vue';

    export default {
        components: { Tags, Carrousel },
        name: "ProjectDescription",
        props: ['project'],
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/_colors.scss";

    $padding: 30px;

    .description {
        padding: $padding;
        border-bottom: 1px solid #fff;
        margin-bottom: 0;
        font-weight: normal;
        margin-bottom: 30px;
    }

    .close {
        float: right;
        margin-top: $padding;

        &:hover {
            color: $roig;
        }
    }

    .content {
        padding: 2rem 0rem;
    }

    .content::v-deep {

        line-height: 1.3rem;

        h2 {
            margin-bottom: 1.5rem;
        }

        p {
            margin: 1rem 0;
        }

        ul {
            padding-left: 40px;
            margin: 1rem 0;

            li {
                margin: .2rem 0;
            }
        }
        
        a {
            color: cadetblue
        }
    }
</style>
