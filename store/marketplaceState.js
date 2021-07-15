export const state = () => ({
  currentPage: -1,
})

export const mutations = {
  setCurrentPage(state, pageNumber) {
    state.currentPage = pageNumber
  }
}