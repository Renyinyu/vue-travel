<template>
  <div class="recommend-item">
    <div class="item-cover-wrapper">
      <div class="item-cover">
        <img :src="imgUrl" alt="">
      </div>
    </div>
    <div class="item-container">
      <p class="title">{{ title }}</p>
      <p class="description">{{ desc }}</p>
      <p class="detail-btn" @click="$emit('on-go-to-detail')">查看详情</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.recommend-item {
  overflow: hidden;
  display: flex;
  padding: 10px;

  .item-cover-wrapper {
    width: 25%;
    background-color: $COLOR_DARK;

    .item-cover {
      width:  100%;
      img {
        width: 100%;
      }
    }
  }

  .item-container {
    box-sizing: border-box;
    flex: 1;
    padding: 0 10px;
    overflow: hidden;
    min-width: 0;

    .title, .description {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 2;
    }

    .title {
      font-size: 18px;
      color: $COLOR_DARK;
    }

    .description {
      font-size: 14px;
      color: $COLOR_GREY;
    }

    .detail-btn {
      width: 25%;
      color: $COLOR_WHITE;
      background-color: orange;
      text-align: center;
      border-radius: 4px;
      line-height: 2;
    }
  }
}
</style>
