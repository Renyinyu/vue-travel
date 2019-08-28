<template>
  <div class="category-box">
    <div class="category-box-header">
      {{ title }}
    </div>
    <div class="category-box-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.category-box {
  .category-box-header {
    background: $COLOR_SHADOW_GREY;
    color: $COLOR_DARK;
    padding: 8px 10px;
    line-height: 1.8;
    font-size: 14px;
  }

  .category-box-container {
  }
}
</style>
