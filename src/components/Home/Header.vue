<template>
  <div class="home-header">
    <!-- <i class="iconfont left-arrow"></i> -->

    <div class="search-bar">
      <i class="iconfont search"></i>
      <p class="input-placeholder">输入城市/景点/游玩主题</p>
    </div>

    <div class="right-area" @click="$emit('on-click')">
      <p class="location">三亚</p>
      <i class="iconfont down-triangle"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.home-header {
  height: 43px;
  background: $THEME_COLOR;
  color: $COLOR_WHITE;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-arrow {
    font-size: 18px;
    margin-left: 6px;
  }

  .search-bar {
    flex: 1;
    display: flex;
    align-items: center;
    background: $COLOR_WHITE;
    box-sizing: border-box;
    height: 65%;
    border-radius: 8px;
    margin: 0 10px;

    .search, .input-placeholder {
      color: $COLOR_GREY;
      margin-left: 10px;
    }
  }

  .right-area {
    display: flex;
    margin-right: 10px;
    line-height: 14px;
    .location {
      display: inline-block;
      font-size: 14px;
    }
    .down-triangle {
      font-size: 20px;
    }
  }
}
</style>
