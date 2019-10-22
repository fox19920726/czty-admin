<template>
  <div class="app-wrapper">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="$route.name"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'AppMain',
  methods: {
  }
}
</script>

<style lang="scss">
</style>
