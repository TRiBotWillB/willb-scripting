<template>
    <div id="app">
        <h1 id="header" class="mt-3">WillB Scripting</h1>

        <Nav class="mt-3"></Nav>

        <b-container id="scripts" class="text-left mt-5">
            <h1>Premium Scripts</h1>
            <b-row class="mt-3">
                <Script v-for="script in premiumScripts" :key="script.scriptName" :scriptName="script.scriptName" :price="script.price" :imgSrc="script.imgSrc" :scriptLink="script.scriptLink"/>
            </b-row>


            <h1 class="mt-5">Free Scripts:</h1>
            <b-row class="mt-3">
                <Script scriptName="WOODCUTTER" price="" imgSrc="img/Woodcutter.png"/>
            </b-row>
        </b-container>

        <b-container id="contact" class="text-left mb-5">
            <h1 class="mt-5">Contact:</h1>
            <ContactForm class="mt-3"></ContactForm>
        </b-container>
    </div>
</template>

<script>
    import Script from './components/Script.vue'
    import Nav from './components/Nav.vue'
    import ContactForm from './components/ContactForm.vue'

    export default {
        name: 'App',
        components: {
            ContactForm,
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
                        scriptLink: "http://google.com/"
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
        font-size: 3.5em
</style>
