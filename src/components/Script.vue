<template>
    <b-col cols="3" class="script">
        <div class="thumbnail">
            <img :src="imgSrc">
            <div class="caption-left">{{price ? price : 'FREE'}}</div>
        </div>

        <h4 class="script-title">{{scriptName}}</h4>
        <p v-if="price">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            Purchase
        </p>
        <p v-else>
            <font-awesome-icon :icon="['fas', 'flask']" />
            Activate1
        </p>
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

    .script {
        text-align: left;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
    }
</style>
