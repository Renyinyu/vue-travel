<template>
  <div class="category-list">
    <div v-for="category in categoryList" :key="category.title">
      <div class="title">{{ category.title }}</div>
      <template v-if="category.children">
        <category-list
          style="margin-left: 10px;"
          :category-list="category.children"
        ></category-list>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  .title {
    line-height: 2.5;
    padding-left: 10px;
  }
}
</style>
