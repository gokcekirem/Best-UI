<template>
    <div class="all">
        <div class="first">
            <div>
                <div class="title title text-3xl block"><h2>Active Listings</h2></div>
            </div>

            <div class="comment text-gray-500">
                <h6>These listings are currently active and will be matched to the respective buyers/sellers at the end of the current Market Clock.</h6>
            </div>

            <br>

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
                <h6>These listings are not active, they have already been matched to the respective buyers/sellers in the previous Market Clocks.</h6>
            </div>

            <br>

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

</template>

<script>
import Vue from "vue";

//export default Vue.extend({});
// need global variable to identify this nodes name/identity
Vue.prototype.$myID = "O=PartyA, L=London, C=GB"
export default {
  name: "list",
  async asyncData({ $http }) {
        const currentlistings = await $http.$get(`http://localhost:50005/listings`)
        const matchings = await $http.$get(`http://localhost:50005/matchings`)

        return {currentlistings: currentlistings, historystates: matchings}
      }


  }

</script>


<style>

.all{
    padding:5%;
}

.first{
    width:100%;
}
.second{
    width:100%;
    padding-top:10%;
}
</style>
