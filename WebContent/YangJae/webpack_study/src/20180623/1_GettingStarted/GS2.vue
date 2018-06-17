<template>
    <div>
        <p>{{ username }}</p>
        <button v-on:click="goBack">Go Back</button>
    </div>
</template>

<script>
export default {
  name : "GS2",
  computed: {
    username () {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  watch : {
      '$route' (newValue, oldValue) {
        // react to route changes...
        console.log("new " + newValue.params.username);
        console.log("old " + oldValue.params.username);
      }
  }
}
</script>
