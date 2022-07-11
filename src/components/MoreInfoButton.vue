<template>
    <a class="link" v-if="href" :href="href" target="_blank"> MORE INFO </a>
    <a class="" v-else> MORE INFO </a>
</template>

<script>   
    export default {
        name: "MoreInfoButton",
        props: ['href'],            
    }
</script>

<style lang="scss" scoped>
    @import "../styles/_colors.scss";

    a {
        display: block;
        width: 100%;
        border: none;
        padding: 5px;
        margin: 20px 0 15px;
        font-weight: 500;
        text-decoration: none;
        background-color: #fff;
        color: #222;
        font-weight: 500;
        font-size: 1rem;
        text-align: center;
        transition: background 250ms ease-in-out, 
                    transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
        
        &:hover,
            &:focus {
            background-color: #91003f;
            color: #fff;
        }
    }


    .link {
        background-color: #fff;
        border: 2px solid $gris;
        color: $gris;

        &:hover,
        &:focus {
            background-color: $gris;
            color: #fff;
        }
    }
</style>