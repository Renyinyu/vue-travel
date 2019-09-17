<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgsLength="gallaryImgsLength"
      @on-click-banner="handleClickBanner"
    ></detail-banner>
    <category-list :category-list="categoryList"></category-list>
    <Previewer ref="previewer" :list="formatGallaryImgs"></Previewer>
    <div style="height: 5000px"></div>
  </div>
</template>

<script>
import axios from '../../service/httpRequest'
import DetailHeader from '@/components/Detail/Header'
import DetailBanner from '@/components/Detail/Banner'
import CategoryList from '@/components/Detail/CategoryList'
import { Previewer } from 'vux'

const FIRST_BANNER_INDEX = 0

export default {
  components: {
    Previewer,
    DetailHeader,
    DetailBanner,
    CategoryList
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  computed: {
    gallaryImgsLength () {
      let length = 0
      if (Array.isArray(this.gallaryImgs)) {
        length = this.gallaryImgs.length
      }
      return length
    },
    formatGallaryImgs () {
      let _gallaryImgs = []
      if (Array.isArray(this.gallaryImgs)) {
        _gallaryImgs = this.gallaryImgs.map(img => {
          return {
            src: img
          }
        })
      }
      return _gallaryImgs
    }
  },
  methods: {
    async getDetailInfo () {
      const detailInfo = await axios({
        url: '/api/detail.json',
        params: {
          id: this.$route.params.id
        }
      })
      console.log('detailInfo,', detailInfo)
      const { bannerImg, sightName, gallaryImgs, categoryList } = detailInfo.data
      this.bannerImg = bannerImg
      this.sightName = sightName
      this.gallaryImgs = gallaryImgs
      this.categoryList = categoryList
    },
    handleClickBanner () {
      this.$refs.previewer.show(FIRST_BANNER_INDEX)
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
