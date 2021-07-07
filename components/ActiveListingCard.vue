<template>

<div class="section">
  <div class="row">
  <div class="column" style="background-color:#aaa;">
    <h4>Listing Type</h4>
    <p>BUY</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h4>Energy Type</h4>
    <p>Renewable</p>
  </div>
    <div class="column">
    <h4>Amount</h4>
    <p>100000</p>
  </div>
    <div class="column" style="background-color:#bbb;">
    <h4>Unit Price</h4>
    <p>0.36$</p>
  </div>
    <div class="column" style="background-color:#aaa;">
    <h4>Mather ID</h4>
    <p>GoV-BV</p>
  </div>
    <div class="column" style="background-color:#bbb;">
    <h4>Market Clock</h4>
    <p>12</p>
  </div>
</div>
</div>

</template>

<style scoped>

.column {
  float: left;
  width: 10%;
  padding: 10px; 
  height: 20%;
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
  background-color: #4CAF50;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

</style>

<script lang="ts">
// use TypeScript here
</script>