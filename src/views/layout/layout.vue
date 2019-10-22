<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <NavBar />
        </el-aside>
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/navBar'
import AppMain from './components/appMain'

export default {
  name: 'Layout',
  components: {
    NavBar,
    AppMain
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
