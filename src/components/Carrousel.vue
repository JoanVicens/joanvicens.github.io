<template>
    <ul class="carrousel">
        <li 
            v-for="(image, index) in images" 
            :key="index" 
            class="item"
            :style="{ 'background-image': 'url(' + image.source + ')' }"
        >
            <a
                v-if="image.link"
                :href="image.link"
                target="_blank"
                class="item-description">
                Visualization
            </a>
        </li>
    </ul>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "Carrousel",
    props: ['images'],
})
</script>

<style lang="scss" scoped>
    .carrousel {
        list-style: none;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        gap: 2%;
        padding-bottom: 10px;
        overflow-x: auto;
    }
    
    .item {
        position: relative;
        margin: 0 1.5rem;
        height: 172px;
        width: 400px;
        min-width: 400px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .item-description {
        background-color: #fffa;
        bottom: 0px;
        color: #222 !important;
        left: 0;
        max-width: 400px;
        padding: 1rem 0;
        position: absolute;
        text-align: center;
        width: 100%;
    }
</style>
