<template>
    <nav>
        <ul class="list-inline">
            <li class="list-inline-item active">
                Home
            </li>
            <li class="list-inline-item">
                Scripts
            </li>
            <li class="list-inline-item">
                Contact
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
<style scoped>
    .thumbnail img {
        max-width: 100%;
    }

    h3 {
        margin: 40px 0 0;
    }

    li {
        font-size: 1.5em;
    }

    li.active {
        border-bottom: 2px solid white !important;
    }
</style>
