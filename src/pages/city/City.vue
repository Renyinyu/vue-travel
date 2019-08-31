<template>
  <div class="select-city">
    <city-header
      :city="currentCity"
      @on-click-back="$router.push('/')"
      @on-change="handleSearchContentChange"
    ></city-header>
    <div class="select-city-container">
      <template v-if="!searchStatus">
        <city-list
          :cities="cities"
          :hot-cities="hotCities"
          :letter="currentLetter"
          :currentCity="currentCity"
          @on-click-city="handleCityChange"
        ></city-list>
        <city-alphabet
          :alphabet="alphabet"
          @on-change="handleLetterChange"
        ></city-alphabet>
      </template>
      <city-search-result
        v-if="searchStatus"
        :list="filterCityList"
      ></city-search-result>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as types from '../../store/actionTypes'
import axios from '@/service/httpRequest'
import Header from '@/components/City/Header'
import List from '@/components/City/List'
import Alphabet from '@/components/City/Alphabet'
import SearchResult from '@/components/City/SearchResult'
export default {
  components: {
    CityHeader: Header,
    CityList: List,
    CityAlphabet: Alphabet,
    CitySearchResult: SearchResult
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      currentLetter: '',
      searchStatus: false,
      searchContent: ''
    }
  },
  methods: {
    ...mapActions({
      updateCity: types.UPDATE_CURRENT_CITY
    }),
    async getCityData () {
      const cityData = await axios.get('/api/city.json')
      console.log(cityData)
      const { cities, hotCities } = cityData.data
      this.cities = cities
      this.hotCities = hotCities
    },

    handleLetterChange (letter) {
      this.currentLetter = letter
    },
    handleSearchContentChange (searchContent) {
      this.searchStatus = !!searchContent
      this.searchContent = searchContent
    },
    handleCityChange (city) {
      this.updateCity(city)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['currentCity']),
    alphabet () {
      const _alphabet = []
      for (let key in this.cities) {
        _alphabet.push(key)
      }
      return _alphabet
    },
    cityList () {
      let _cityList = []
      for (let key in this.cities) {
        _cityList = _cityList.concat(this.cities[key])
      }
      return _cityList
    },
    filterCityList () {
      const _filterList = []
      for (let i = 0; i < this.cityList.length; i++) {
        if (this.cityList[i].name.match(this.searchContent) || this.cityList[i].spell.match(this.searchContent)) {
          _filterList.push(this.cityList[i])
        }
      }
      return _filterList
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
