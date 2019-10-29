<template>
  <div class="app-wrapper">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="$route.name"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.getters.cachedViews
    }
  }
}
</script>

<style lang="scss">
</style>
