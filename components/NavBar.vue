<template>
  <div
    class="
      bar
      bg-MainColorInactive
      text-bestFontMedium
      fontMedium
      fontColorActive
    "
  >
    <div class="top bg-MainColorActive block">
      <div class="welcome">
        <h2>Welcome to Marketplace! {{ currentName }}</h2>
      </div>
      <div class="clock fontColorInactive block">
        <h6>Current Market Clock: {{ currentMarketTime }}</h6>
      </div>
      <div class="time fontColorInactive block">
        <h6>Current Market Time: {{ currentMarketState }}</h6>
      </div>
    </div>
    <div class="middle block">
      <div class="buttons">
        <nuxt-link
          to="/create"
          @click.native="activateButton($event)"
          id="CreatePageButton"
          @click="activateButton($event)"
        >
          <div
            :class="{
              'new-listings-page-button button-container fontColorInactive':
                currentPageID != 0,
              'new-listings-page-button button-container bg-MainColorActive fontColorActive':
                currentPageID == 0,
            }"
          >
            <div class="button-container-image">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 30 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Webview"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="Creation"
                    transform="translate(-43.000000, -501.000000)"
                  >
                    <g
                      id="plus-circle"
                      transform="translate(10.000000, 491.000000)"
                    >
                      <g transform="translate(34.000000, 11.000000)">
                        <path
                          d="M14,9.33333333 L14,14 M14,14 L14,18.6666667 M14,14 L18.6666667,14 M14,14 L9.33333333,14 M28,14 C28,21.7320444 21.7320444,28 14,28 C6.26801778,28 0,21.7320444 0,14 C0,6.26801778 6.26801778,0 14,0 C21.7320444,0 28,6.26801778 28,14 Z"
                          id="Shape"
                          :class="{
                            iconActiveColor: currentPageID == 0,
                            iconInactiveColor: currentPageID != 0,
                          }"
                          stroke-width="2"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="button-container-text">Create New Listing</div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="/listings"
          @click.native="activateButton($event)"
          id="ListingPageButton"
          @click="activateButton($event)"
        >
          <div
            :class="{
              'listing-history-button button-container fontColorInactive':
                currentPageID != 1,
              'listing-history-button button-container bg-MainColorActive fontColorActive':
                currentPageID == 1,
            }"
          >
            <div class="button-container-image">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 34 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Webview"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="Creation"
                    transform="translate(-40.000000, -559.000000)"
                  >
                    <g id="archive" transform="translate(9.000000, 549.000000)">
                      <g transform="translate(32.000000, 11.000000)">
                        <path
                          d="M3.55555556,7 L28.4444444,7 M3.55555556,7 C1.59187556,7 0,5.4329975 0,3.5 C0,1.5670025 1.59187556,0 3.55555556,0 L28.4444444,0 C30.4081778,0 32,1.5670025 32,3.5 C32,5.4329975 30.4081778,7 28.4444444,7 M3.55555556,7 L3.55555556,24.5 C3.55555556,26.43305 5.14743111,28 7.11111111,28 L24.8888889,28 C26.8526222,28 28.4444444,26.43305 28.4444444,24.5 L28.4444444,7 M12.4444444,14 L19.5555556,14"
                          id="Shape"
                          :class="{
                            iconActiveColor: currentPageID == 1,
                            iconInactiveColor: currentPageID != 1,
                          }"
                          stroke-width="2"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="button-container-text">Listing History</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bar {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 20%;
}

.top {
  height: 33%;
  text-align: center;
}

.welcome {
  height: 60%;
  text-align: center;
}

.clock {
  width: 100%;
  text-align: left;
}
.time {
  width: 100%;
  height: 25%;
  text-align: left;
}

.middle {
  height: 66%;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
}

.create {
  padding: 10%;
  width: 90%;
}

.history {
  padding: 10%;
  width: 90%;
}

.buttons {
  height: 33%;
}

.button-container {
  height: 35%;
  width: 95%;
  padding-left: 5%;
  display: flow-root;
  border-radius: 16px;
  margin: auto;
}

.button-container-image {
  width: 15%;
  height: 100%;
  float: left;
  justify-content: center;
  align-items: center;
  display: flex;
}

.button-container-text {
  height: 100%;
  width: 80%;
  padding-left: 5%;
  float: right;
  justify-content: left;
  align-items: center;
  display: flex;
}
</style>

<script>
export default {
  computed: {
    currentPageID() {
      return this.$store.state.marketplaceState.currentPage;
    },
    currentName() {
      return this.$store.state.serverInfo.activeNodeName;
    },
    currentMarketTime() {
      return this.$store.state.serverInfo.currentTime;
    },
    currentMarketState() {
      return this.$store.state.serverInfo.currentMarketState;
    },
  },
  methods: {
    activateButton(event) {},
  },
};
</script>
