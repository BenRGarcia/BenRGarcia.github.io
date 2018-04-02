<template>
  
</template>

<script>
export default {
  computed: {
    social () {
      return this.$store.getters['social/getSocial']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
