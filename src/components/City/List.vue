<template>
  <div class="city-list wrapper">
    <ul class="content">
      <li class="category">
        <div class="category-title">当前城市</div>
        <div class="category-container">
          <div class="category-item">
            <p class="category-item-text">北京</p>
          </div>
        </div>
      </li>
      <li class="category">
        <div class="category-title">热门城市</div>
        <div class="category-container">
          <div class="category-item" v-for="city in hotCities" :key="city.id">
            <p class="category-item-text">{{city.name}}</p>
          </div>
        </div>
      </li>
      <li
        class="category"
        v-for="(category, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="category-title">{{ key }}</div>
        <p class="city" v-for="city in category" :key="city.id">{{ city.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    cities: {
      type: Object,
      required: true
    },
    hotCities: {
      type: Array,
      default: () => []
    },
    letter: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    let wrapper = document.querySelector('.wrapper')
    // eslint-disable-next-line
    this.scroll = new BScroll(wrapper)
  },
  watch: {
    letter (newVal) {
      if (newVal) {
        const element = this.$refs[newVal][0]
        this.scroll.scrollToElement(element, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.city-list {
  height: 100%;
  overflow: hidden;

  .category {
    display: flex;
    flex-direction: column;

    &-title {
      line-height: 2;
      background-color: $COLOR_SHADOW_GREY;
      padding: 2px 4px;
      font-size: 12px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }

    &-container {
      padding: 8px;
    }

    &-item {
      display: inline-block;
      width: 30%;
      margin: 4px;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }

      &-text {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 0;
        text-align: center;
      }
    }

    .city {
      padding: 4px;
      line-height: 2;
      border-bottom: 1px solid #ccc;
      font-size: 13px;

      &:last-child {
        border-bottom: none;
      }
    }

    &:last-child{
      .city:last-child {
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>
