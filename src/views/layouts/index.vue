<template>
  <div>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>

import Nav from "@/components/Nav";

export default {
  name: "index",
  components: {
    Nav
  }
}
</script>

<style scoped>

</style>