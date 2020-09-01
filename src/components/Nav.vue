<template>
    <nav id="nav">
        <ul class="list-inline">
            <li class="list-inline-item">
                <a href="#">Home</a>
            </li>
            <li class="list-inline-item">
                <a href="#scripts">Scripts</a>
            </li>
            <li class="list-inline-item">
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<script>

    export default {
        name: 'Script',
        props: {
            scriptName: String,
            price: String,
            imgSrc: String,
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    .thumbnail img
        max-width: 100%

    li
        font-size: 1.5em

    li.active
        border-bottom: 2px solid white !important

    a
        color: white !important
</style>
