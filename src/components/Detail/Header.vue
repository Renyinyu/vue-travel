<template>
  <div class="detail-header">
    <div
      class="detail-header-abs"
      ref="backBtn"
      v-show="!showHeader"
      @click="handleClickBack"
    >
      <i class="iconfont left-arrow"></i>
    </div>
    <div class="detail-header-fix" ref="detailHeader" :style="opacityOpt" v-show="showHeader">
      <i class="iconfont left-arrow" @click="handleClickBack"></i>
      <p class="title">景点详情</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showHeader: false,
      opacityOpt: {
        opacity: 0
      }
    }
  },
  methods: {
    handleClickBack () {
      // this.$emit('on-click-back')
      this.$router.push('/')
    },
    onScroll (e) {
      this.$nextTick(() => {
        const _scrollTop = document.body.scrollTop || document.documentElement.scrollTop

        if (_scrollTop > 43) {
          let _opacity = (_scrollTop / 43)
          _opacity = _opacity > 1 ? 1 : _opacity
          this.opacityOpt = {opacity: _opacity}
          this.showHeader = true
        } else {
          this.showHeader = false
        }
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.detail-header {
  &-abs {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
    top: 10px;
    color: #fff;
    border-radius: 50%;
    background: rgba(0, 0, 0, .6);
    width: 25px;
    height: 25px;
    text-align: center;
    z-index: 100;

    .left-arrow {
      font-size: 13px;
    }
  }

  &-fix {
    height: 43px;
    color: $COLOR_WHITE;
    width: 100%;
    line-height: 43px;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    background: $THEME_COLOR;

    .left-arrow {
      font-size: 18px;
      margin-left: 6px;
    }

    .title {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      font-size: 16px;
    }
  }
}
</style>
