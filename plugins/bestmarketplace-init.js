import Vue from 'vue'

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
