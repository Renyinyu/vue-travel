<template>
  <div class="home-wrapper">
    <home-header></home-header>
    <swiper
      :list="demo03_list"
       auto
       loop
       style="width:100%;"
       height="100px"
       dots-position="center"
       dots-class="dots"
       :aspect-ratio="37.5"
      ></swiper>
  </div>
</template>

<script>
import HomeHeader from '@/components/Home/Header'
import { Swiper } from 'vux'

const imgList = [
  'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg',
  'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg',
  'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/507e5e117c000e575f3987fcde8b6aba.jpg_750x200_fb0a1e1a.jpg'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  components: {
    HomeHeader,
    Swiper
  },
  data () {
    return {
      demo03_list: demoList
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  height: 100%;

  .dots {
    background: red;
    border: 10px solid red;
  }
}
</style>
