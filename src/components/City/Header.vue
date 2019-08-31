<template>
  <div class="city-header">
    <div class="first-row">
      <i class="iconfont left-arrow" @click="$emit('on-click-back')"></i>
      <p class="title">选择城市</p>
    </div>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchContent"
        class="search-input"
        placeholder="输入城市名或拼音"
      >
        <!-- @input="handleInputChange" -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchContent: ''
    }
  },
  watch: {
    searchContent (newVal) {
      this.$emit('on-change', newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.city-header {
  height: 86px;
  background: $THEME_COLOR;
  color: $COLOR_WHITE;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: space-between;

  .first-row {
    width: 100%;
    line-height: 43px;
    display: flex;
    align-items: center;
    position: relative;
    left: 0;
    top: 0;

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

  .search-bar {
    // line-height: 43px;
    // height: 43px;
    box-sizing: border-box;
    padding: 4px 10px;

    .search-input {
      border: none;
      outline: none;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 4px;
      width: 100%;
      // height: 100%;
      // line-height: 100%;
      vertical-align: middle;
      background: #fff;
      color: #333;
      font-size: 16px;
    }
  }

}
</style>
