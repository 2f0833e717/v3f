<template>
  <div>
    <p>Loading.vue</p>
    <div>
      <motion-root></motion-root>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  components: {
    'motion-root': require('components/MotionRoot.vue').default,
  }
}
</script>
