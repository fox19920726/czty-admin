<template>
  <div class="app-wrapper">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="false"
      :unique-opened="true"
    >
      <ItemBar
        v-for="item in routers"
        :key="item.path"
        :item="item"
        :base-path="item.path"
      />
    </el-menu>
  </div>
</template>

<script>
import ItemBar from './itemBar'

export default {
  name: 'NavBar',
  components: {
    ItemBar
  },
  computed: {
    routers() {
      return this.$store.getters.routers
    }
  }
}
</script>
