<template>
  <div :class="'s-w ' + (isCollapse?'hide-nav-bar':'')">
    <el-scrollbar :native="false">
      <el-container>
        <AppHead />
        <el-container>
          <el-aside width="240px">
            <NavBar />
          </el-aside>
          <el-main>
            <TagView />
            <AppMain />
          </el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<script>
import AppHead from './components/appHead'
import NavBar from './components/navBar'
import TagView from './components/tagView'
import AppMain from './components/appMain'

export default {
  name: 'Layout',
  components: {
    AppHead,
    NavBar,
    AppMain,
    TagView
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  }
}
</script>

<style lang="scss">
.el-header{
  background: $headerBg;
}
.el-aside{
  width:240px !important;
  transition: width 0.15s;
}
.s-w{
  height:100%;
}
.el-scrollbar{
  height:100%;
}
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.hide-nav-bar{
  .el-aside{
    width:36px !important;
  }
  .wrapper-tag{
    left:37px !important;
  }
  .nav-el-menu-vertical{
    width: 36px;
  }
  .el-submenu > .el-submenu__title {
    padding: 0 10px 0 10px !important;
  }
  .el-submenu {
    .menu-icon-i{
      width:18px !important;
    }
    .el-submenu__icon-arrow{
      display: none;
    }
  }
}
</style>
