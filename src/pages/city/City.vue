<template>
  <div class="select-city">
    <city-header @on-click-back="$router.push('/')"></city-header>
    <div class="select-city-container">
      <city-list
        :cities="cities"
        :hot-cities="hotCities"
        :letter="currentLetter"
      ></city-list>
      <city-alphabet
        :alphabet="alphabet"
        @on-change="handleLetterChange"
      ></city-alphabet>
    </div>
  </div>
</template>

<script>
import axios from '@/service/httpRequest'
import Header from '@/components/City/Header'
import List from '@/components/City/List'
import Alphabet from '@/components/City/Alphabet'
export default {
  components: {
    CityHeader: Header,
    CityList: List,
    CityAlphabet: Alphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      currentLetter: ''
    }
  },
  methods: {
    async getCityData () {
      const cityData = await axios.get('/api/city.json')
      console.log(cityData)
      const { cities, hotCities } = cityData.data
      this.cities = cities
      this.hotCities = hotCities
    },

    handleLetterChange (letter) {
      this.currentLetter = letter
    }
  },
  computed: {
    alphabet () {
      const _alphabet = []
      for (let key in this.cities) {
        _alphabet.push(key)
      }
      return _alphabet
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>

<style lang="scss" scoped>
.select-city {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &-container {
    flex: 1;
    overflow: auto;
    position: relative;
    left: 0;
    top: 0;
  }
}
</style>
