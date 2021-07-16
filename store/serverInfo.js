export const state = () => ({
  activeURL: "localhost:50005",
  activeNodeName: "Please Connect",
  currentTime: -1,
  currentMarketState: -1
})

export const mutations = {
  setActiveURL(state, iURL) {
    state.activeURL = iURL
  },
  setActiveNodeName(state, iName) {
    state.activeNodeName = iName
  },
  setCurrentTime(state, iTime) {
    state.currentTime = iTime
  },
  setCurrentMarketState(state, iState) {
    state.currentMarketState = iState
  }
}