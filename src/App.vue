<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,300;0,400;1,100&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@200;300;400&display=swap')

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

.btn-blue
  color: #DDE2F4
  background-color: #4A61DD
  border: none

  &:hover
    color: #DDE2F4
    background-color: #556ee8 !important

</style>