<template>

<div class="section">
  <div class="row">
  <div class="column-first bg-gray-300 border-color: coral">
    <div class="col-name title text-xl block"><h4>Listing Type</h4></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.listingType}}</p></div>
  </div>
  <div class="column bg-gray-300">
    <div class="col-name title text-xl block"><h4>Energy Type</h4></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.electricityType}}</p></div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-xl block"><h4>Amount</h4></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.amount}}</p></div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-xl block"><h4>Unit Price</h4></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.unitPrice}}</p></div>
  </div>
    <div class="column bg-gray-300">
    <div class="col-name title text-xl block"><h4>Mather ID</h4></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.matcher}}</p></div>
  </div>
    <div class="column-last bg-gray-300">
    <div class="col-name title text-xl block"><h4>Market Clock</h4></div>
    <br>
    <div class="col-input text-gray-600"><p>{{listing.state.data.marketClock}}</p></div>
  </div>
</div>
</div>

</template>

<style scoped>

.column {
  float: left;
  width: 15%;
  padding: 10px; 
  height: 20%;
  border-top-color: coral;
  border-bottom-color: coral;
  border-top-width: 3px;
  border-bottom-width: 3px;
}

.column-first {
  float: left;
  width: 15%;
  padding: 10px; 
  height: 20%;
  border-top-left-radius: 8%;
  border-bottom-left-radius: 8%;
  border-top-color: coral;
  border-left-color: coral;
  border-bottom-color: coral;
  border-top-width: 3px;
  border-left-width: 3px;
  border-bottom-width: 3px;
}

.column-last {
  float: left;
  width: 15%;
  padding: 10px; 
  height: 20%;
  border-top-right-radius: 8%;
  border-bottom-right-radius: 8%;
  border-top-color: coral;
  border-right-color: coral;
  border-bottom-color: coral;
  border-top-width: 3px;
  border-right-width: 3px;
  border-bottom-width: 3px;
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
  height: 20%;
  margin-left: auto;
  margin-right: auto;
  /*border-color: coral;
  border-width: 2px;*/

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