<template>
  <ul class="search-result">
    <li
      class="item"
      v-for="item in list"
      :key="item.id"
      @click="$emit('on-click', item.name)"
    >
      {{ item.name }}
    </li>
    <li class="no-result" v-if="!list.length">没有找到想要的结果呢</li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.search-result {
  .item {
    line-height: 2.5;
    font-size: 13px;
    padding: 0 10px;
    border-bottom: 1px solid #e9e9e9;
  }

  .no-result {
    line-height: 2.5;
    text-align: center;
    font-size: 13px;
  }
}
</style>
