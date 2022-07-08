<template>
    <section id="" class="wrapper">
        <div class="container">
            <h1>
                <span class="emoticon">{{ emoji }}</span>
                {{ name }}
            </h1>
            <slot></slot>
        </div>
    </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: "Section",
    props: ['emoji', 'name'],
})
</script>
