<template>

<div class="section">
  <div class="row">
  <div class="column" style="background-color:#aaa;">
    <h5>Role</h5>
    <p>BUYER</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h5>Energy Type</h5>
    <p>Renewable</p>
  </div>
    <div class="column">
    <h5>Amount</h5>
    <p>100000</p>
  </div>
    <div class="column" style="background-color:#bbb;">
    <h5>Desired Unit Price</h5>
    <p>0.36$</p>
  </div>
    <div class="column" style="background-color:#aaa;">
    <h5>Market Unit Price</h5>
    <p>0.48$</p>
  </div>
    <div class="column" style="background-color:#bbb;">
    <h5>Market Clock</h5>
    <p>1</p>
  </div>
    <div class="column">
    <h5>Mather ID</h5>
    <p>GoV-BV</p>
  </div>
    <div class="column" style="background-color:#bbb;">
    <h5>Matched ID</h5>
    <p>SunCo</p>
  </div>
</div>
</div>

</template>

<style scoped>

.column {
  float: left;
  width: 10%;
  padding: 10px; 
  height: 25%;
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