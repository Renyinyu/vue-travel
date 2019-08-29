<template>
  <div class="home-wrapper">
    <home-header @on-click="$router.push('/city')"></home-header>
    <swiper
      :list="swiperList"
       auto
       loop
       style="width:100%;"
       height="100px"
       dots-position="center"
       dots-class="dots"
       :aspect-ratio="37.5"
      ></swiper>
      <icon-area :iconList="iconList"></icon-area>
      <category-box class="mt20" :title="'热门推荐'">
        <template v-for="item in recommendList">
          <recommend-item :key="item.id" v-bind="item"></recommend-item>
        </template>
      </category-box>
      <category-box class="mt20" :title="'周末旅游'">
        <template v-for="item in weekendList">
          <hot-sale :key="item.id" v-bind="item"></hot-sale>
        </template>
      </category-box>

  </div>
</template>

<script>
import { Swiper } from 'vux'
import axios from '../../service/httpRequest'
import { IMG_LIST } from './CONSTANTS'
import HomeHeader from '@/components/Home/Header'
import IconArea from '@/components/Home/IconArea'
import CategoryBox from '@/components/Home/CategoryBox'
import RecommendItem from '@/components/Home/RecommendItem'
import HotSale from '@/components/Home/HotSale'

const SwiperImgs = IMG_LIST.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

export default {
  components: {
    Swiper,
    HomeHeader,
    IconArea,
    CategoryBox,
    RecommendItem,
    HotSale
  },
  data () {
    return {
      swiperImgs: SwiperImgs,
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  methods: {
    async getHomeData () {
      const data = await axios.get('/api/index.json')
      console.log(data)
      const { iconList, recommendList, swiperList, weekendList } = data.data
      this.swiperList = swiperList.map(icon => {
        icon.img = icon.imgUrl
        icon.url = 'javascript:'
        return icon
      })
      this.iconList = iconList
      this.recommendList = recommendList
      this.weekendList = weekendList
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
}
</style>
