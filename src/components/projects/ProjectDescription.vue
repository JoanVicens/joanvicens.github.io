<template>
    <article class="description">
        <div class="close" @click="close">
            <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <line x1="17.5" x2="54.5" y1="17.5" y2="54.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                    <line x1="54.5" x2="17.5" y1="17.5" y2="54.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>
                </g>
            </svg>
        </div>
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

    .description {
        padding: 30px;
        border-bottom: 1px solid #fff;
        margin-bottom: 0;
        font-weight: normal;
        margin-bottom: 30px;
    }

    .close {
        float: right;
        width: 2.5rem;

        line {
            stroke: white;
            stroke-width: 2;
        }

        &:hover {
            line {
                stroke: $roig;
                stroke-width: 4;
            }
        }
    }

    .content {
        margin-bottom: 2rem;
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
