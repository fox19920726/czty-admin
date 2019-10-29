<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <NavBar />
        </el-aside>
        <el-main>
          <TagView />
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/navBar'
import TagView from './components/tagView'
import AppMain from './components/appMain'

export default {
  name: 'Layout',
  components: {
    NavBar,
    AppMain,
    TagView
  },
  methods: {
  }
}
</script>

<style lang="scss">
.el-header{
  background: $headerBg;
}
</style>
