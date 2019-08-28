<template>
  <div class="icon-area">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in swiperList" :key="index">
          <ul class="icons">
            <li
              class="icon-wrapper"
              v-for="icon in page"
              :key="icon.id"
            >
              <div class="icon">
                <img :src="icon.imgUrl" alt="">
              </div>
              <p class="text">{{ icon.desc }}</p>
            </li>
          </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    iconList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        observeParents: true
      }
    }
  },
  computed: {
    swiperList () {
      const pages = []
      const IconQuantityPerPage = 8
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / IconQuantityPerPage)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log('pages,', pages)
      return pages
    }
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   let swiperSlides = this.swiperSlides
    //   if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
    // }, 3000)
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

  .swiper-pagination-bullets {
    bottom: 0;
  }

  .swiper-pagination {
    position: relative;
    top: 5px;
    line-height: 2;
  }
}
</style>

<style lang="scss">
  @import '../../assets/styles/variables.scss';

  .icon-area {
    .swiper-pagination-bullet-active {
      background: $THEME_COLOR;
    }
  }
</style>
