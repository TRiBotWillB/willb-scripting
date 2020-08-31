<template>
    <div id="app">
        <h1 id="header">WillB Scripting</h1>

        <Nav></Nav>

        <b-container>
            <b-row>
                <Script v-for="script in premiumScripts" :key="script.scriptName" :scriptName="script.scriptName" :price="script.price" :imgSrc="script.imgSrc"/>
            </b-row>
            <b-row>
                <Script scriptName="WOODCUTTER" price="" imgSrc="img/Woodcutter.png"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Script from './components/Script.vue'
    import Nav from './components/Nav.vue'

    export default {
        name: 'App',
        components: {
            Script,
            Nav
        },
        data() {
            return {
                premiumScripts: [
                    {
                        scriptName: "FARMER",
                        price: "$9.99",
                        imgSrc: "img/Farmer.png",
                    },
                    {
                        scriptName: "CLUE SCROLLER",
                        price: "$4.99",
                        imgSrc: "img/ClueScroller.png",
                    },
                    {
                        scriptName: "BLAST FURNACE",
                        price: "$4.99",
                        imgSrc: "img/BlastFurnace.png",
                    }
                ]
            }
        }
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,300;0,400;1,100&display=swap')
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200;300;400&display=swap')

    #app
        font-family: Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center

    html, body
        background-color: #23272A
        color: white

        font-family: 'Oswald', sans-serif
        font-weight: 200

    #header
        font-family: 'Lobster', cursive
</style>
