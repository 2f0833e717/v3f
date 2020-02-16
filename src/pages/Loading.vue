/* eslint-disable */
<template>
  <div>
    <p>Loading.vue</p>
    <div>
      <motion-root />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  methods: {
    "motion-root": require("components/MotionRoot.vue").default
  }
}
</script>
