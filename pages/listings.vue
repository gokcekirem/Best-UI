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
                v-for="(listing) in states"
                v-bind:key="listing.data.listingType"
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
                <HistoryListing />
            </div>

            <br><br><br><br><br>

            <div class="activeListing">
                <HistoryListing />
            </div>

            <br><br><br><br><br>

            <div class="activeListing">
                <HistoryListing />
            </div>

        </div>

    </div>
    
</template>

<script>
import Vue from "vue";

//export default Vue.extend({});

export default {
    async asyncData({ $http }) {
      const states = await $http.$get(`http://localhost/50005/listings`)
      return { states }
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
