<template>
  <div class="outer-container">
    <div class="all">
      <div class="first">
        <div>
          <div class="title title text-3xl block"><h2>Active Listings</h2></div>
        </div>

        <div class="comment text-gray-500">
          <h6>
            These listings are currently active and will be matched to the
            respective buyers/sellers at the end of the current Market Clock.
          </h6>
        </div>

        <br />

        <div class="activeListing">
          <ActiveListingCard
            class="card"
            v-for="listing in currentlistings"
            v-bind:key="listing.ref.txhash"
            v-bind:listing="listing"
          />
        </div>
      </div>

      <div class="second">
        <div>
          <div class="title title text-3xl block"><h2>Matchings</h2></div>
        </div>

        <div class="comment text-gray-500">
          <h6>
            These listings are not active, they have already been matched to the
            respective buyers/sellers in the previous Market Clocks.
          </h6>
        </div>

        <br />

        <div class="activeListing">
          <HistoryListing
            class="card"
            v-for="listing in historystates"
            v-bind:key="listing.ref.txhash"
            v-bind:listing="listing"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

//export default Vue.extend({});
// need global variable to identify this nodes name/identity
Vue.prototype.$myID = "O=PartyA, L=London, C=GB";
export default {
  name: "list",
  data() {
      return {
        currentlistings: [],
        historystates: []
      };
  },
  methods: {

     async getlistings() {
                  //You  should put those into try catch
                  var currentlistings = []
                  var matchings = []
                  /*
                  try{

                     currentlistings = await $http.$get(currentlistingsURL);
                    matchings = await $http.$get(matchingsURL);
                  } catch (e){}

                  */

                  var currentlistingsURL =
                                                         "http://" + this.$store.state.serverInfo.activeURL + "/listings";

                                       var matchingsURL =
                                                                              "http://" + this.$store.state.serverInfo.activeURL + "/matchings";


                     //console.log('getlistings');

                     var ref = this

                     this.$axios.$get(currentlistingsURL)
                     .then(function (response) {
                         // handle success
                         console.log("response");
                         console.log(response);
                         ref.currentlistings = response
                         return ref.currentlistings
                       })
                       .catch(function (error) {
                         // handle error
                         console.log(error);
                       })

                      this.$axios.$get(matchingsURL)
                       .then(function (response) {
                           // handle success
                           console.log(response);
                           ref.historystates = response
                           return ref.historystates
                         })
                         .catch(function (error) {
                           // handle error
                           console.log(error);
                         })




                    //return {currentlistings: currentlistings, historyListings: matchings}
                }

  }
  ,
  beforeMount() {
    this.$currentPageSetter(this.$store, 1);
    this.getlistings();
  },
};
</script>


<style>
.all {
  padding: 5%;
}

.first {
  width: 100%;
}
.second {
  width: 100%;
  padding-top: 10%;
}
</style>
