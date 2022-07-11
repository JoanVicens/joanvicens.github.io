<template>
    <Section :emoji="'👉'" :name="'Get in touch'" id="contact">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/joan-vicens/" target="_blank">Linkedin</a>
        </li>
        <li>
            <a href="mailto:joanvicens@proton.me">Email</a>
        </li>
        <li>
          <a href="https://github.com/JoanVicens" target="_blank">Git Hub</a>
        </li>
      </ul>
    </Section>
</template>

<script>
    import { defineComponent } from '@vue/composition-api'
    import Section from "../components/Section.vue";

    export default defineComponent({
        name: "ContactSection",
        components: {
            Section,
        },
    });
</script>

<style lang="scss" scoped>
    @import "../styles/_colors.scss";

    Section {
        background-color: $roig;
        color: #fff;
    }

    ul {
        padding: 0;
        list-style: none;
        li {
            font-size: 2rem;
            margin-left: 30px;
            margin-bottom: 20px;
        }
    }

    a {
        color: $color_link;
        font-weight: 900;
        &:visited {
            color: #b61a5d;
        }
        &:hover {
            color: $gris;
        }
        
    }
</style>