<template>

<div class="section">
  <div class="row">
  <div class="column-first bg-gray-300">
    <div class="col-name title text-sm block"><h5>Role</h5></div>
    <br>
    <div class="col-input text-gray-600" v-if="listing.state.data.consumer === $myID"><p>BUYER</p></div>
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
    <div class="col-input text-gray-600" v-if="listing.state.data.consumer === $myID"><p>{{listing.state.data.consumerDesiredPrice}}$</p></div>
            <div class="col-input text-gray-600" v-else>{{listing.state.data.producerDesiredPrice}}$</div>
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
    <div class="col-input text-gray-600 text-xs "><p>{{listing.state.data.matcher}}</p></div>
  </div>
    <div class="column-last bg-gray-300">
    <div class="col-name title text-sm block"><h5>Matched ID</h5></div>
    <br>
    <div class="col-input text-gray-600 text-xs" v-if="listing.state.data.consumer === $myID"><p>{{listing.state.data.producer}}</p></div>
    <div class="col-input text-gray-600 text-xs" v-else>{{listing.state.data.consumer}}</div>
  </div>
</div>
<br>
</div>

</template>

<style scoped>

.column {
  float: left;
  width: 12.5%;
  padding: 10px;
  height: 100%;
}

.column-first {
  float: left;
  width: 12.5%;
  padding: 10px;
  height: 100%;
  border-top-left-radius: 8%;
  border-bottom-left-radius: 8%;
}

.column-last {
  float: left;
  width: 12.5%;
  padding: 10px;
  height: 100%;
  border-top-right-radius: 8%;
  border-bottom-right-radius: 8%;
}

.row{
  display: table;
  width: 100%;
  height: 25%;
}

.section{
  width: 100%;
  height: 100%;
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
