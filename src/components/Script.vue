<template>
    <b-col cols="3">
        <div class="thumbnail">
            <img :src="imgSrc">
            <div class="caption-left">{{price}}</div>
        </div>

        <h3 class="script-title">{{scriptName}}</h3>
    </b-col>
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
