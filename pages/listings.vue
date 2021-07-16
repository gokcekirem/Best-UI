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
                v-for="listing in currentstates"
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
Vue.prototype.$myID = "O=PartyA, L=London, C=GB"
export default {
  name: "list",
  data(){
    return{
       currentstates : [{
                                    "state": {
                                        "data": {
                                            "@class": "de.tum.best.states.ListingState",
                                            "listingType": "ProducerListing",
                                            "electricityType": "Renewable",
                                            "unitPrice": 50,
                                            "amount": 3,
                                            "sender": "O=PartyA, L=London, C=GB",
                                            "matcher": "O=mister matching, L=New York, C=US",
                                            "marketClock": 1,
                                            "participants": [
                                                "O=PartyA, L=London, C=GB",
                                                "O=mister matching, L=New York, C=US"
                                            ]
                                        },
                                        "contract": "de.tum.best.contracts.ListingContract",
                                        "notary": "O=Notary, L=London, C=GB",
                                        "encumbrance": null,
                                        "constraint": {
                                            "@class": "net.corda.core.contracts.SignatureAttachmentConstraint",
                                            "key": "aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6"
                                        }
                                    },
                                    "ref": {
                                        "txhash": "7444DFB915E7C55DF9A161B939718F8F0A9C4A1A37571659791897EECD7A9DB7",
                                        "index": 0
                                    }
                                },
                                {
                                    "state": {
                                        "data": {
                                            "@class": "de.tum.best.states.ListingState",
                                            "listingType": "ProducerListing",
                                            "electricityType": "Non Renewable",
                                            "unitPrice": 45,
                                            "amount": 5,
                                            "sender": "O=PartyA, L=London, C=GB",
                                            "matcher": "O=mister matching, L=New York, C=US",
                                            "marketClock": 1,
                                            "participants": [
                                                "O=PartyA, L=London, C=GB",
                                                "O=mister matching, L=New York, C=US"
                                            ]
                                        },
                                        "contract": "de.tum.best.contracts.ListingContract",
                                        "notary": "O=Notary, L=London, C=GB",
                                        "encumbrance": null,
                                        "constraint": {
                                            "@class": "net.corda.core.contracts.SignatureAttachmentConstraint",
                                            "key": "aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6"
                                        }
                                    },
                                    "ref": {
                                        "txhash": "7444DFB915E7C55DF9A161B939718F8F0A9C4A1A37571659791897EECD7A9DB7",
                                        "index": 0
                                    }
                                }],

       historystates : [{
                                "state": {
                                    "data": {
                                        "@class": "de.tum.best.states.MatchingState",
                                        "unitPrice": 5,
                                        "unitAmount": 3,
                                        "buyer": "O=PartyC, L=Munich, C=DE",
                                        "seller": "O=PartyA, L=London, C=GB",
                                        "matcher": "O=mister matching, L=New York, C=US",
                                        "participants": [
                                            "O=PartyC, L=Munich, C=DE",
                                            "O=PartyA, L=London, C=GB",
                                            "O=mister matching, L=New York, C=US"
                                        ]
                                    },
                                    "contract": "de.tum.best.contracts.MatchingContract",
                                    "notary": "O=Notary, L=London, C=GB",
                                    "encumbrance": null,
                                    "constraint": {
                                        "@class": "net.corda.core.contracts.SignatureAttachmentConstraint",
                                        "key": "aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6"
                                    }
                                },
                                "ref": {
                                    "txhash": "8A3620A6C4D212365E9F0F17655F36A5B15DAE6AD779BE692057ABD7AF43993D",
                                    "index": 0
                                }
                            }
                            ,
                                      {
                                              "state": {
                                                  "data": {
                                                      "@class": "de.tum.best.states.MatchingState",
                                                      "unitPrice": 8,
                                                      "unitAmount": 4,
                                                      "buyer": "O=PartyA, L=London, C=GB",
                                                      "seller": "O=PartyC, L=London, C=GB",
                                                      "matcher": "O=anonymous matching, L=Shangai, C=CN",
                                                      "participants": [
                                                          "O=PartyC, L=Munich, C=DE",
                                                          "O=PartyA, L=London, C=GB",
                                                          "O=missus matching, L=New York, C=US"
                                                      ]
                                                  },
                                                  "contract": "de.tum.best.contracts.MatchingContract",
                                                  "notary": "O=Notary, L=London, C=GB",
                                                  "encumbrance": null,
                                                  "constraint": {
                                                      "@class": "net.corda.core.contracts.SignatureAttachmentConstraint",
                                                      "key": "aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6"
                                                  }
                                              },
                                              "ref": {
                                                  "txhash": "8A3620A6C4D212365E9F0F17655F36A5B15DAE6AD779BE692057ABD7AF43993D",
                                                  "index": 0
                                              }
                                          },
                                          {
                                              "state": {
                                                  "data": {
                                                      "@class": "de.tum.best.states.MatchingState",
                                                      "unitPrice": 7,
                                                      "unitAmount": 2,
                                                      "buyer": "O=PartyA, L=London, C=GB",
                                                      "seller": "O=PartyC, L=London, C=GB",
                                                      "matcher": "O=missus matching, L=New York, C=US",
                                                      "participants": [
                                                          "O=PartyC, L=Munich, C=DE",
                                                          "O=PartyA, L=London, C=GB",
                                                          "O=missus matching, L=New York, C=US"
                                                      ]
                                                  },
                                                  "contract": "de.tum.best.contracts.MatchingContract",
                                                  "notary": "O=Notary, L=London, C=GB",
                                                  "encumbrance": null,
                                                  "constraint": {
                                                      "@class": "net.corda.core.contracts.SignatureAttachmentConstraint",
                                                      "key": "aSq9DsNNvGhYxYyqA9wd2eduEAZ5AXWgJTbTEw3G5d2maAq8vtLE4kZHgCs5jcB1N31cx1hpsLeqG2ngSysVHqcXhbNts6SkRWDaV7xNcr6MtcbufGUchxredBb6"
                                                  }
                                              },
                                              "ref": {
                                                  "txhash": "8A3620A6C4D212365E9F0F17655F36A5B15DAE6AD779BE692057ABD7AF43993D",
                                                  "index": 0
                                              }
                                          }
                                        ]
    }
  }

  }

</script>


<style>

.all{
    padding:5%;
}

.first{
    width:100%;
    height: 30%;
}
.second{
    width:100%;
    padding-top:10%;
}
</style>
