import Vue from 'vue'

/** Create listing states */
Vue.prototype.$currentPageSetter = (store, pageID) => {
  store.commit('marketplaceState/setCurrentPage', pageID)
}

Vue.prototype.$energyTypeSetter = (store, energyID) => {
  store.commit('marketplaceState/setEnergyType', energyID)
}

Vue.prototype.$listingTypeSetter = (store, listingType) => {
  store.commit('marketplaceState/setListingType', listingType)
}

Vue.prototype.$statusSetter = (store, reponse) => {
  store.commit('marketplaceState/setCreationStatus', reponse)
}

/** General Connection States */
Vue.prototype.$activeURLSetter = (store, iURL) => {
  store.commit('serverInfo/setActiveURL', iURL)
}

Vue.prototype.$activeNodeNameSetter = (store, iName) => {
  store.commit('serverInfo/setActiveNodeName', iName)
}

Vue.prototype.$currentTimeSetter = (store, iTime) => {
  store.commit('serverInfo/setCurrentTime', iTime)
}

Vue.prototype.$currentMarketStateSetter = (store, iState) => {
  store.commit('serverInfo/setCurrentMarketState', iState)
}