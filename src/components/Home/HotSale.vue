<template>
  <div class="hot-sale">
    <div class="cover-wrapper">
      <div class="cover-img">
        <img :src="imgUrl" alt="">
      </div>
    </div>
    <div class="hot-sale-container">
      <p class="title">{{ title }}</p>
      <p class="description">{{ desc }}</p>
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
.hot-sale {
  padding: 10px 0;
  .cover-wrapper {
    overflow: hidden;

    .cover-img {
      height: 0;
      padding-bottom: 33%;
      background-color: #333;

      img {
        width: 100%;
      }
    }
  }

  .hot-sale-container {
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
  }
}
</style>
