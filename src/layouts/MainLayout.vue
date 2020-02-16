/* eslint-disable */
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated></q-header>
    <q-footer> </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  components: {},

  data() {
    return {}
  },
}
</script>
