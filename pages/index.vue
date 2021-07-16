<template>
  <div class="outer-container bg-ActiveAreaBackground fontMedium">
    <div class="mainText comment text-3xl">
      Please enter the address of the node that you are trying to connect below
    </div>
    <input
      type="text"
      class="input block"
      v-model="iAddress"
      placeholder="localhost:50005"
    />
    <div class="submitButton" @click="establishConnection(iAddress)">
      <svg
        width="20%"
        height="20%"
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
</template>
<style scoped>
.outer-container {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.mainText {
  height: 35%;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  font-size: 1rem;
}

.input {
  margin: auto;
  width: 40%;
  padding: 2.5%;
  border-radius: 0.5%;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
}
.submitButton {
  height: 45%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}
</style>
<script >
export default {
  data() {
    return {
      iAddress: "",
    };
  },
  methods: {
    async establishConnection(input_Address) {
      //Create the base url
      const targetBaseURL = "http://" + input_Address;

      //Generate name, and markettime urls
      const targetNameURL = targetBaseURL + "/name";
      const targetTimeURL = targetBaseURL + "/market-time";

      //Flags for understanding the status
      var errorNameFlag = false;
      var errorTimeFlag = false;

      //Fetch the name and marketTime
      var nameResponse = await this.$axios
        .$get(targetNameURL)
        .catch(function (error) {
          console.log("An error has occured while fetching the node's name");
          //Update creationStatus to FAILED
          errorNameFlag = true;
          console.log(error);
        });

      var timeResponse = await this.$axios
        .$get(targetTimeURL)
        .catch(function (error) {
          console.log("An error has occured while fetching the node's time");
          //Update creationStatus to FAILED
          errorTimeFlag = true;
          console.log(error);
        });

      if (errorNameFlag || errorNameFlag) {
        console.log(
          "An error occured while triying to establish connection to the node"
        );
      } else if (!errorNameFlag && !errorNameFlag) {
        this.$activeURLSetter(this.$store, input_Address);
        this.$activeNodeNameSetter(this.$store, nameResponse.name);
        this.$currentTimeSetter(
          this.$store,
          timeResponse.state.data.marketClock
        );
        this.$currentMarketStateSetter(
          this.$store,
          timeResponse.state.data.marketTime
        );
      }
    },
  },
};
</script>
