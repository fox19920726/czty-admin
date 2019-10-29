<template>
  <div class="app-wrapper">
    <el-scrollbar
      class="tagview-scroll-container"
      :vertical="false"
    >
      <router-link
        v-for="item in visitedViews"
        :to="item.path"
        :key="item.path"
        class="ahref-a"
        @contextmenu.prevent.native="openMenu(item,$event)"
      >
        <span class="scroll-tab-span">{{item.meta.title}}</span>
        <span
          v-if="item.path !== '/dashboard'"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(item)"
        />
      </router-link>
    </el-scrollbar>
    <ul
      v-show="visible"
      :style="{left:left+'px',top:top+'px'}"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">刷新本页</li>
      <li v-if="selectedTag.path !== '/dashboard'" @click="closeSelectedTag(selectedTag)">关闭本页</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TagView',
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    visitedViews() {
      return this.$store.getters.visitedViews
    },
    routers() {
      return this.$store.getters.routers
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  watch: {
    $route() {
      this.addTags()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  methods: {
    initTags() {
      this.$store.dispatch('addVisitedView', {
        path: '/dashboard',
        name: '09',
        meta: { title: '首页' }
      })
    },
    addTags() {
      if (this.$route.meta.title) {
        this.$store.dispatch('addView', this.$route)
      }
    },
    toLastView(visitedViews) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView)
      } else {
        this.$router.push('/')
      }
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    closeSelectedTag(item) {
      this.$store.dispatch('delView', item).then(({ visitedViews }) => {
        if (this.isActive(item)) {
          this.toLastView(visitedViews)
        }
      })
    },
    openMenu(tag, e) {
      this.left = e.clientX
      this.top = e.clientY + 15;
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    },
    refreshSelectedTag(view) {
      this.$store.dispatch('delCachedView', view).then(() => {
        this.$nextTick(() => {
          this.$router.replace({ path: `/redirect${this.$route.fullPath}` })
        })
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag)
      this.$store.dispatch('delOthersViews', this.selectedTag)
    },
    closeAllTags(view) {
      this.$store.dispatch('delAllViews').then(({ visitedViews }) => {
        if (view.path === '/dashboard') {
          return
        }
        this.toLastView(visitedViews)
      })
    }
  }
}
</script>

<style lang="scss" scoped="true">
.tagview-scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom:20px;
  .ahref-a{
    margin-right: 5px;
    display: inline-block;
    padding:5px 10px;
    border:1px solid $borderHighGray;
    font-size: 14px;
  }
  .el-icon-close{
    font-size:12px;
  }
  .active{
    background: $greenBg;
    color:$fontWhite;
    border-color:$greenBg;
    .scroll-tab-span::before{
      content: '';
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 6px;
    }
  }
  /deep/ {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 40px;
    }
  }
}
.contextmenu {
  width:105px;
  margin: 0;
  background: #fff;
  z-index: 100;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
