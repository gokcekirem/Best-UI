import Vue from 'vue'

Vue.prototype.$currentPageSetter = (store, pageID) => {
  store.commit('marketplaceState/setCurrentPage', pageID)
}
