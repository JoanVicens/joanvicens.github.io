<template>
    <ul class="tags">
        <li v-for="tag in tags" :key="tag">
            {{ tag }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Tags",
        props: ['tags'],
    }
</script>
