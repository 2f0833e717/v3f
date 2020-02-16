/* eslint-disable */
<template>
  <q-page padding>
    <q>index.vue</q>
    <q-tabs>
      <q-route-tab
        icon="autorenew"
        to="/loading"
        exact
      />
      <q-route-tab
        icon="account_circle"
        to="/about"
        exact
      />
    </q-tabs>
    <router-link
      to="/loading"
      icon="autorenew"
      exact
      @click="trigger"
    >
      loading
    </router-link>
    <div
      id="q-app"
      class="this.class"
    >
      <div class="q-pa-md">
        <q-ajax-bar
          ref="bar"
          reverse
          position="right"
          color="red-14"
          size="10px"
          skip-hijack
        />
        <q-ajax-bar
          ref="foo"
          position="left"
          color="red-14"
          size="10px"
          skip-hijack
        />
        <q-ajax-bar
          ref="boo"
          position="bottom"
          color="red-14"
          size="10px"
          skip-hijack
        />
        <q-ajax-bar
          ref="too"
          reverse
          position="top"
          color="red-14"
          size="10px"
          skip-hijack
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
      class: "_open"
    }
  },
  watch: {
    "isOpen": function () {
      console.log(this.isOpen)
      this.isOpen ? this.open() : this.close()
    }
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.isOpen = false
      next()
    })
    this.$router.afterEach((to, from, next) => {
      setTimeout(() => {
        this.isOpen = true
      }, 800)
    })
  },

  methods: {
    close: function () {
    	this.class = "_close"
    },
    open: function () {
      trigger()
      this.class = "_open"
    },
    trigger() {
      const bar = this.$refs.bar
      const foo = this.$refs.foo
      const boo = this.$refs.boo
      const too = this.$refs.too

      bar.start()
      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 500 + 1500)

      foo.start()
      this.timer = setTimeout(() => {
        if (this.$refs.foo) {
          this.$refs.foo.stop()
        }
      }, Math.random() * 500 + 1500)

      boo.start()
      this.timer = setTimeout(() => {
        if (this.$refs.boo) {
          this.$refs.boo.stop()
        }
      }, Math.random() * 500 + 1500)

      too.start()
      this.timer = setTimeout(() => {
        if (this.$refs.too) {
          this.$refs.too.stop()
        }
      }, Math.random() * 500 + 1500)
    },
  },
}
</script>
