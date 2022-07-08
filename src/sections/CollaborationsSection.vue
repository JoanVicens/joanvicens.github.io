<template>
    <Section :emoji="'🤝'" :name="'Collaborations'" id="collaborations">
        <CollaborationsList/>
    </Section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Section from "../components/Section.vue";
import CollaborationsList from "../components/collaborations/CollaborationsList.vue";

export default defineComponent({
    name: "CollaborationsSection",
    components: {
        Section,
        CollaborationsList,
    },
})
</script>

<style lang="scss" scoped>
    @import "../styles/_colors.scss";

    Section {
        background: $verd_clar;
        color: $gris;
    }
</style>
