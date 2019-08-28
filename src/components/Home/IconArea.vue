<template>
  <div class="icon-area">
    <ul class="icons">
      <li
        class="icon-wrapper"
        v-for="icon in iconList"
        :key="icon.id"
      >
        <div class="icon">
          <img :src="icon.imgUrl" alt="">
        </div>
        <p class="text">{{ icon.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    iconList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.icon-area {
  overflow: hidden;
  .icons {
    height: 0;
    padding-bottom: 50%;
    display: flex;
     flex-wrap: wrap;

    .icon-wrapper {
      width: 25%;
      height: 0;
      padding-bottom: 25%;

      .icon {
        text-align: center;
        width: 72%;
        margin: 0 auto;
        overflow: hidden;
        box-sizing: border-box;
        padding: 5px 3px 6px;

        img {
          width: 100%;
        }
      }

      .text {
        color: $COLOR_DARK;
        text-align: center;
        font-size: 14px;
        box-sizing: border-box;
        padding: 0 3px;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
