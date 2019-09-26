<template>
  <div id="app">
    <HelloWorld />
    <img src="./images/logo.png" />
  </div>
</template>

<script>
import HelloWorld from './views/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style lang="scss">
	.bbb{
		color: yellow;
	}
	image{
		width:100px;
		height: 100px;
	}
</style>
