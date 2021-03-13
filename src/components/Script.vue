<template>
    <b-col cols="3" class="script">
        <div class="thumbnail">
            <img :src="imgSrc">
            <div class="caption-left">{{price ? `$${price}` : 'FREE'}}</div>
        </div>

        <h4 class="script-title">{{scriptName}}</h4>
        <p v-if="price">
            <a :href='scriptLink'>
                <font-awesome-icon :icon="['fas', 'shopping-cart']"/>
                Purchase
            </a>
        </p>
        <p v-else>
            <a :href="scriptLink">
                <font-awesome-icon :icon="['fas', 'flask']"/>
                Activate
            </a>
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
            scriptLink: String
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

    .thumbnail img
        max-width: 100%

    a
        color: white !important

    .script
        font-family: 'Oswald', sans-serif
        text-align: left

        .script-title
            font-weight: 300

</style>
