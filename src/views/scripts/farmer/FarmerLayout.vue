<template>
  <div class="farmer">
    <script-nav :links="navLinks"/>
    Test
  </div>
</template>

<script>

import ScriptNav from "@/components/gui/nav/ScriptNav";

export default {
  name: "FarmerLayout",
  components: {ScriptNav},
  data() {
    return {
      navLinks: [
        {
          to: '/tasks',
          image: require('@/assets/images/icons/tree.png'),
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>