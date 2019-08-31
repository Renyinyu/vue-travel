import COMMON from '../../utils/common'
import * as actionTypes from '../actionTypes'

const defaultCity = '北京'

const state = {
  currentCity: COMMON.getLocalstorage('currentyCity') || defaultCity
}

const getters = {
  currentCity: (state) => state.currentCity
}

const mutations = {
  [actionTypes.MUTA_CURRENT_CITY] (state, city) {
    state.currentCity = city
  }
}

const actions = {
  [actionTypes.UPDATE_CURRENT_CITY] (ctx, city) {
    ctx.commit(actionTypes.MUTA_CURRENT_CITY, city)
    COMMON.setLocalstorage('currentyCity', city)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
