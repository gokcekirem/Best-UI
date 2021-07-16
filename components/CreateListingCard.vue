<template>
  <div
    :class="{
      'createListingCard bg-ActiveAreaCard fontMedium failIndicator':
        currentStatus == 1,
      'createListingCard bg-ActiveAreaCard fontMedium successIndicator':
        currentStatus == 0,
      'createListingCard bg-ActiveAreaCard fontMedium defaultIndicator':
        currentStatus != 0 && currentStatus != 1,
    }"
  >
    <div class="left">
      <div class="cardNameText text-3xl">
        <h2>Listing Creation</h2>
      </div>

      <div class="left-section">
        <div class="section">
          <label class="section-header-text" for="fname">Amount</label>
          <div class="comment">
            <h6>
              Denotes the amount of electricity you would like to buy/sell in
              MVU*. (Minimum Viable Unit)
            </h6>
          </div>
          <input
            type="text"
            id="fname"
            class="input"
            name="firstname"
            placeholder="Please enter a number"
          />
        </div>

        <div class="section">
          <label class="section-header-text" for="fname">Unit Price</label>
          <div class="comment">
            <h6>
              Denotes the MVU* price of the electricity you would like to
              buy/sell from. (Minimum Viable Unit)
            </h6>
          </div>
          <input
            type="text"
            id="fname"
            class="input"
            name="firstname"
            placeholder="Please enter a number"
          />
        </div>

        <div class="section">
          <label class="section-header-text" for="fname">Matcher Node ID</label>
          <div class="comment">
            <h6>
              Every matching node corresponds to a micro marketplace, please
              specify in which marketplace you would like to participate in
            </h6>
          </div>
          <input
            type="text"
            id="fname"
            class="input"
            name="firstname"
            placeholder="Please enter a string"
          />
        </div>

        <div class="section">
          <label class="section-header-text" for="fname">Energy Type</label>
          <div class="comment">
            <h6>
              Type of the energy you would like to buy/sell. In many
              marketplaces, the final unit prices will differ based on the enery
              type.
            </h6>
          </div>
          <div class="horizontal-radio-button-container">
            <div class="energy-type-button-container left-container">
              <div
                :class="{
                  'energy-type-radio-button input': currentEnergyType != 0,
                  'energy-type-radio-button ActiveInput':
                    currentEnergyType == 0,
                }"
                @click.native="activateEnergyTypeButton(0)"
                @click="activateEnergyTypeButton(0)"
              ></div>
              <div
                :class="{
                  'energyt-type-text comment': currentEnergyType != 0,
                  'energyt-type-text comment fontBold': currentEnergyType == 0,
                }"
              >
                Non-Renewable
              </div>
            </div>
            <div class="energy-type-button-container right-container">
              <div
                :class="{
                  'energy-type-radio-button input': currentEnergyType != 1,
                  'energy-type-radio-button ActiveInput':
                    currentEnergyType == 1,
                }"
                @click.native="activateEnergyTypeButton(1)"
                @click="activateEnergyTypeButton(1)"
              ></div>
              <div
                :class="{
                  'energyt-type-text comment': currentEnergyType != 1,
                  'energyt-type-text comment fontBold': currentEnergyType == 1,
                }"
              >
                Renewable
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="right-top-container">
        <div class="section-header-text section-right-left">
          <h2>To</h2>
        </div>
        <div class="vertical-buttons section-right-right">
          <div class="vertical-button-top-container">
            <div
              :class="{
                'energy-type-radio-button input': currentListingType != 0,
                'energy-type-radio-button ActiveInput': currentListingType == 0,
              }"
              @click.native="activateListingTypeButton(0)"
              @click="activateListingTypeButton(0)"
            ></div>
            <div
              :class="{
                'energyt-type-text comment horizontalText':
                  currentListingType != 0,
                'energyt-type-text comment  horizontalText fontBold':
                  currentListingType == 0,
              }"
            >
              Sell
            </div>
          </div>
          <div class="vertical-button-bottom-container">
            <div
              :class="{
                'energy-type-radio-button input': currentListingType != 1,
                'energy-type-radio-button ActiveInput': currentListingType == 1,
              }"
              @click.native="activateListingTypeButton(1)"
              @click="activateListingTypeButton(1)"
            ></div>
            <div
              :class="{
                'energyt-type-text comment horizontalText':
                  currentListingType != 1,
                'energyt-type-text comment fontBold horizontalText':
                  currentListingType == 1,
              }"
            >
              Buy
            </div>
          </div>
        </div>
      </div>

      <div class="submit-button">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 86 86"
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
          >
            <g id="Creation" transform="translate(-1198.000000, -789.000000)">
              <g
                id="Listing-Creation"
                transform="translate(332.000000, 85.000000)"
              >
                <g
                  id="GoButton"
                  class="buttonBackgroundColor"
                  transform="translate(866.000000, 704.000000)"
                >
                  <circle id="Oval" cx="43" cy="43" r="43"></circle>
                  <g
                    id="lightning-bolt"
                    transform="translate(21.000000, 19.000000)"
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="5"
                  >
                    <polygon
                      id="Path"
                      points="24.1875 18.6666667 24.1875 0 0 29.3333333 18.8125 29.3333333 18.8125 48 43 18.6666667"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.createListingCard {
  width: 70%;
  margin: auto;
  height: 80%;
  text-align: left;
  padding: 1%;
  border-radius: 5%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.left {
  height: 100%;
  text-align: left;
  width: 80%;
  float: left;
  padding-left: 3%;
  margin: auto;
}

.right {
  height: 100%;
  width: 30%;
  float: right;
  text-align: center;
  padding-top: 30%;
  margin: auto;
}

.cardNameText {
  padding-top: 4%;
  padding-bottom: 3%;
}

.comment {
  padding-bottom: 1%;
}

.section {
  width: 90%;
  height: 20%;
  text-align: left;
  padding-bottom: 3%;
  border-radius: 0.5%;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}

.input {
  width: 90%;
  padding: 2.5%;
  border-radius: 0.5%;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
}

.energy-type-button-container {
  text-align: center;
  justify-content: right;
  align-items: center;
  display: flex;
}
.energy-type-radio-button {
  height: 3rem;
  width: 3rem;
  border-radius: 15px;
  display: inline-block;
}

.left-container {
  float: left;
}

.right-container {
  float: right;
}

.energyt-type-text {
  text-align: center;
  padding-left: 1%;
  justify-content: right;
  align-items: center;
  display: flex;
}

.selection {
  background-color: #9400d3;
  width: 100%;
  padding: 1%;
}

.section-right-left {
  float: left;
  height: 60%;
  justify-content: left;
  align-items: center;
  display: flex;
  width: 20%;
}

.section-right-right {
  float: right;
  height: 60%;
  width: 80%;
  justify-content: right;
  align-items: center;
  display: flex;
  position: relative;
  padding-left: 10%;
}

.vertical-button-top-container {
  position: absolute;
  top: 0;
}

.vertical-button-bottom-container {
  position: absolute;
  bottom: 0;
}
.middle {
  float: left;
}

.radio {
  background-color: #f5f5dc;
}

.right-top-container {
  align-items: center;
  height: 75%;
}

.submit-button {
  height: 20%;
}

.horizontalText {
  width: 100%;
  text-align: center;
  padding-left: 25%;
}
</style>

<script>
export default {
  computed: {
    currentEnergyType() {
      return this.$store.state.marketplaceState.energyType;
    },
    currentListingType() {
      return this.$store.state.marketplaceState.listingType;
    },
    currentStatus() {
      return this.$store.state.marketplaceState.creationStatus;
    },
  },
  methods: {
    activateEnergyTypeButton(eType) {
      this.$energyTypeSetter(this.$store, eType);
    },
    activateListingTypeButton(lType) {
      this.$listingTypeSetter(this.$store, lType);
    },
  },
};
</script>
