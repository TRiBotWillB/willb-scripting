<template>
  <div class="img-nav">
    <router-link v-for="link in links" :key="link.id" :active="link.active" :to="link.to">
      <img class="img-btn img-fluid ml-3" :src="link.image"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ScriptNav",
  props: {
    links: Array
  }
}
</script>

<style scoped src="@/assets/css/wbgui.css">
</style>