export const state = () => ({
  currentPage: -1,
  energyType: -1,
  listingType: -1,
  creationStatus: -1
})

export const mutations = {
  setCurrentPage(state, pageNumber) {
    state.currentPage = pageNumber
  },
  setEnergyType(state, energyType) {
    state.energyType = energyType
  },
  setListingType(state, listingType) {
    state.listingType = listingType
  },
  setCreationStatus(state, response) {
    state.creationStatus = response
  }
}