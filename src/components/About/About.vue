<template>
  <div class="about">
      <h1 v-if="personName">Hello -{{ personName }}-, this is an about page</h1>
      <p>We'll add things like me and myself and I.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
        personName: this.$route.params.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./About.css" scoped>

</style>
