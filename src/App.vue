<template>
    <div id="app">

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

        <b-container>
            <b-row>
                <Script scriptName="FARMER" price="$9.99" imgSrc="img/Farmer.png"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Script from './components/Script.vue'

    export default {
        name: 'App',
        components: {
            Script
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
