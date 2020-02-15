<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-ajax-bar ref="bar" reverse position="right" color="red-14" size="10px" skip-hijack></q-ajax-bar>
      <q-ajax-bar ref="foo" position="left" color="red-14" size="10px" skip-hijack></q-ajax-bar>
      <q-ajax-bar ref="boo" position="bottom" color="red-14" size="10px" skip-hijack></q-ajax-bar>
      <q-ajax-bar ref="too" reverse position="top" color="red-14" size="10px" skip-hijack></q-ajax-bar>
      <q-btn color="primary" label="Trigger" @click="trigger"></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    trigger () {
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
    }
  }
}
</script>
