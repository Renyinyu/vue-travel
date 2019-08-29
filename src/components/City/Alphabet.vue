<template>
  <ul class="alphabet">
    <li
      class="alphabet-item"
      v-for="letter in alphabet"
      :key="letter"
      :ref="letter"
      @click="handleChange(letter)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{ letter }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    alphabet: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      touchStatus: false,
      firstElementOffsetTop: 0,
      alphabetElementHeight: 0,
      timer: null
    }
  },
  updated () {
    this.firstElementOffsetTop = this.$refs['A'][0].offsetTop
    this.alphabetElementHeight = this.$refs['A'][0].clientHeight
  },
  methods: {
    handleChange (letter) {
      this.$emit('on-change', letter)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const firstElementOffsetTop = this.firstElementOffsetTop
          const alphabetElementHeight = this.alphabetElementHeight
          const touchY = e.touches[0].clientY - 86
          const index = Math.floor((touchY - firstElementOffsetTop) / alphabetElementHeight)
          if (index >= 0 && index < this.alphabet.length) {
            this.$emit('on-change', this.alphabet[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.alphabet {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  &-item {
    line-height: 1.5;
    color: $THEME_COLOR;
  }
}
</style>
