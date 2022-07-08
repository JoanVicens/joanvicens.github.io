<template>
    <article
        id="en-ruta"
        class="description"
    >
        <div class="controls">
            <span class="expand">expand</span>
            <span class="close">minimize</span>
        </div>

        <div class="content">
            <h2>{{ project.name }}</h2>
            <div v-html="project.html"></div>
        </div>

        <ul class="tags">
            <li v-for="tag in project.tags" :key="tag">
                {{ tag }}
            </li>
        </ul>
    </article>
</template>

<script>
    export default {
        name: "ProjectDescription",
        props: ['project'],
        created() {
            // console.log(this.description.html)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/_colors.scss";

    .description {
        position: relative;
        padding: 30px;
        border-bottom: 1px solid #fff;
        margin-bottom: 0;
        font-weight: normal;
        max-height: 10000px;
        margin-bottom: 30px;
        transition: all 1s cubic-bezier(.08,.82,.17,1);
        overflow: hidden;
        // display: none;
        &.animate__fadeOutDown {
            max-height: 0px;
            margin-bottom: 0px;
            padding: 0px;
            border: none;
        }

        a {
            color: cadetblue
        }
        .slider-img {
            width: 100%;
            max-width: 400px;
        }
        .content {
            padding: 2rem 0rem;
        }
        .controls {
            position: absolute;
            right: 10px;
            top: 20px;
            font-size: 1.2rem;
            letter-spacing: 2px;
            span:hover {
                cursor: pointer;
            }
            .expand:hover {
                color: $verd;
            }
            .close:hover {
                color: $roig;
            }
            span:last-child {
                margin-left: 20px;
            }
            @media only screen and (max-width:320px) {
                .expand {
                    color: $verd;
                }
                .close {
                    color: $roig;
                }
            }
        }
    }
</style>
