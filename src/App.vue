<template>
    <div id="app">
        <h1 id="header">WillB Scripting</h1>

        <Nav></Nav>

        <b-container>
            <b-row>
                <Script scriptName="FARMER" price="$9.99" imgSrc="img/Farmer.png"/>
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
        }
    }
</script>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,300;0,400;1,100&display=swap')

    #app
        font-family: Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center

    html, body
        background-color: #23272A
        color: white

    #header
        font-family: 'Lobster', cursive
</style>
