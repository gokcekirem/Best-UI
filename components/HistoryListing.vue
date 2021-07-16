<template>

<div class="section">
  <div class="row">
  <div class="column-first bg-gray-300">
    <div class="col-name title text-sm block"><h5>Role</h5></div>
    <br>
    <div class="col-input text-gray-600" v-if="listing.state.data.buyer === $myID"><p>BUYER</p></div>
        <div class="col-input text-gray-600" v-else>SELLER</div>
  </div>
  <div class="column bg-gray-300">
    <div class="col-name title text-sm block"><h5>Energy Type</h5></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.electricityType}}</p></div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-sm block"><h5>Amount</h5></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.unitAmount}}</p></div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-sm block"><h5>Desired Unit Price</h5></div>
    <br>
    <div class="col-input text-gray-600" v-if="listing.state.data.buyer === $myID"><p>{{listing.state.data.buyerDesiredPrice}}$</p></div>
            <div class="col-input text-gray-600" v-else>{{listing.state.data.sellerDesiredPrice}}$</div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-sm block"><h5>Market Unit Price</h5></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.unitPrice}}$</p></div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-sm block"><h5>Market Clock</h5></div>
    <br>
    <div class="col-input text-gray-600"><p></p>{{listing.state.data.marketClock}}</div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-sm block"><h5>Matcher ID</h5></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.matcher}}</p></div>
  </div>
    <div class="column-last bg-gray-300">
    <div class="col-name title text-sm block"><h5>Matched ID</h5></div>
    <br>
    <div class="col-input text-gray-600" v-if="listing.state.data.buyer === $myID"><p>{{listing.state.data.seller}}</p></div>
    <div class="col-input text-gray-600" v-else>{{listing.state.data.buyer}}</div>
  </div>
</div>
</div>

</template>

<style scoped>

.column {
  float: left;
  width: 11.25%;
  padding: 10px;
  height: 25%;
}

.column-first {
  float: left;
  width: 11.25%;
  padding: 10px;
  height: 25%;
  border-top-left-radius: 8%;
  border-bottom-left-radius: 8%;
}

.column-last {
  float: left;
  width: 11.25%;
  padding: 10px;
  height: 25%;
  border-top-right-radius: 8%;
  border-bottom-right-radius: 8%;
}


.row:after {
  content: "";
  display: table;
  clear: both;
  margin-left: 10%;
  margin-right: 10%;
  float: left;
}

.section{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.col-name{
  text-align: center;
}

.col-input{
  text-align: center;
}

</style>

<script>
export default {
    props: { listing: Object }

  }
</script>
