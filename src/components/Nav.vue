<template>
    <nav>
        <ul class="list-inline">
            <li class="list-inline-item">
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

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
