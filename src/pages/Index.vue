<template>
  <q-page padding>
    <q>index.vue</q>
    <div>
      <!-- <router-link :to="{ hash: '#Handling-links' }">
        <template v-slot="props">
          <q-btn v-bind="buttonProps(props)" />
        </template>
      </router-link> -->
      <q-tabs>
        <q-route-tab
          icon="autorenew"
          to="/loading"
          exact />
        <q-route-tab
          icon="account_circle"
          to="/about"
          exact />
      </q-tabs>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      RootMotion: [{}]
    }
  }
}
</script>

<syle>
</syle>
