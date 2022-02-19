<script setup>
    import Projects from './components/Projects.vue';
    import Collaborations from './components/Collaborations.vue';
    import Contact from './components/Contact.vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import ProjectDetail from './components/ProjectDetail.vue';
</script>

<template>
    <div id="app">
        <Header></Header>
        <Projects></Projects>
        <Collaborations></Collaborations>
        <Contact></Contact>
        <Footer></Footer>
        <ProjectDetail></ProjectDetail>
    </div>
</template>
