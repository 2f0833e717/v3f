<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$q.dark.set(true)
    this.$q.addressbarColor.set("#000")
  }
}
</script>
