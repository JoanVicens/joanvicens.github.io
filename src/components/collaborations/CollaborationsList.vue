<template>
    <section class="collaboration-list" v-if="collaborations">
        <CollaborationCard
            v-for="collab in collaborations"
            :collaboration="collab"
            :key="collab.name"
            v-model:show="displayProject"
        />
    </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import collaborations from "../../data/collaborations/collaborations.en.json";
import Section from '../Section.vue';
import CollaborationCard from "./CollaborationCard.vue";

export default defineComponent({
    name: "CollaborationsList",
    components: { CollaborationCard, Section },
    data: () => ({
        collaborations
    }),
});
</script>

<style lang="scss" scoped>
    .collaboration-list {
        display: grid;
        gap: 24px;
        grid-auto-rows: 222px;
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }
</style>
