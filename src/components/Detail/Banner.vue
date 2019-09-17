<template>
  <div class="banner">
    <img class="banner-img" :src="bannerImg" @click="$emit('on-click-banner')" alt="">
    <div class="banner-bottom">
      <p class="banner-bottom-left">
        {{ sightName }}
      </p>
      <p class="banner-bottom-right">
        <i class="iconfont image"></i>
        <span>{{ gallaryImgsLength }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerImg: {
      type: String,
      required: true
    },
    sightName: {
      type: String,
      required: true
    },
    gallaryImgsLength: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.banner {
  position: relative;
  left: 0;
  top: 0;

  &-img {
    width:  100%;
  }

  &-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 0 10px;
    line-height: 2;
    color: $COLOR_WHITE;
    font-size: 13px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    &-left {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 10px;
    }
  }
}
</style>
