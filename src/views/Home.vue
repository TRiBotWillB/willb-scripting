<template>
  <div class="home">
    <h1 id="header" class="mt-3">WillB Scripting</h1>

    <Nav class="mt-3"></Nav>

    <b-container id="scripts" class="text-left mt-5">
      <h1>Premium Scripts</h1>
      <b-row class="mt-3">
        <Script v-for="script in premiumScripts" :key="script.scriptName" :scriptName="script.scriptName"
                :price="script.price" :imgSrc="script.imgSrc" :scriptLink="script.scriptLink"/>
      </b-row>


      <h1 class="mt-5">Free Scripts:</h1>
      <b-row>
        <Script v-for="script in freeScripts" :key="script.scriptName" :scriptName="script.scriptName"
                :imgSrc="script.imgSrc" :scriptLink="script.scriptLink"/>
      </b-row>
    </b-container>

    <b-container id="contact" class="text-left mb-5">
      <h1 class="mt-5">Contact:</h1>
      <ContactForm class="mt-3"></ContactForm>
    </b-container>
  </div>
</template>

<script>

import Script from '@/components/Script.vue'
import Nav from '@/components/Nav.vue'
import ContactForm from '@/components/ContactForm.vue'

import axios from 'axios'

export default {
  name: "Home",
  components: {
    ContactForm,
    Script,
    Nav
  },
  data() {
    return {
      scripts: [
      ]
    }
  },
  computed: {
    premiumScripts: function () {
      return this.scripts.filter(s => s.isPremium)
    },
    freeScripts: function() {
      return this.scripts.filter(s => !s.isPremium)
    }
  },
  mounted() {
    axios.get('http://localhost:1337/scripts')
    .then(res => {
      let data = res.data

      if(data) {
        this.scripts = data.map(o => {
          return {
            scriptName: o["ScriptName"],
            price: o["Price"],
            imgSrc: `http://localhost:1337${o["ScriptImage"][0]["formats"]["medium"]["url"]}`,
            isPremium: o["IsPremium"]
          }
        })
      }
    }).catch(err => {
      console.log(err)
    });
  }
}
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,300;0,400;1,100&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200;300;400&display=swap')


html, body
  background-color: #23272A
  color: white

  font-family: 'Oswald', sans-serif
  font-weight: 200

#header
  font-family: 'Lobster', cursive
  font-size: 3.5em
</style>
