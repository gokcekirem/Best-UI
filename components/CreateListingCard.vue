<template>

<div class="listing">
  <div class="left">
    <h2>Listing Creation</h2>
    <div class="section">
      <label class="title" for="fname">Amount</label>
      <div class="comment">
        <h6>"Denotes the amount of electricity you would like to buy/sell in MVU*. (Minimum Viable Unit)"</h6>
      </div>
      <input type="text" id="fname" class="input" name="firstname" placeholder="Please enter a number">
        
      </div>
    
    <div class="section">
      <label class="title" for="fname">Unit Price</label>
      <div class="comment">
      <h6>"Denotes the MVU* price of the electricity you would like to buy/sell from. (Minimum Viable Unit)"</h6>
    </div>
     <input type="text" id="fname" class="input" name="firstname" placeholder="Please enter a number">  
    </div>
    
    <div class="section">
      <label class="title" for="fname">Matcher Node ID</label>
      <div class="comment">
      <h6>"Every matching node corresponds to a micro marketplace, please specift in which marketplace you would like to participate in"</h6>
    </div>
     <input type="text" id="fname" class="input" name="firstname" placeholder="Please enter a string">  
    </div>
    
    <div class="section">
      <label class="title" for="fname">Energy Type</label>
      <div class="comment">
      <h6>"Type of the energy you would like to buy/sell. In many marketplaces, the final unit prices will differ based on the enery type."</h6>
    </div>
      <div><label class="radio1" width="50%" align="left">Renewable
  <input type="checkbox">
  <span class="checkmark"></span>
</label></div>
      <div><label class="radio2" width="50%" float="right">Non renewable
  <input type="checkbox">
  <span class="checkmark"></span>
</label></div>
    </div>
    
  </div>
  <div class="right">
    <div class="buttons">
    <br><label class="radio">Sell
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
    <br><label class="radio">Buy
  <input type="checkbox">
  <span class="checkmark"></span>
</label>
  </div>
  </div>
</div>

</template>

<style scoped>

.listing {
  background: #7FFFD4;
  width: 50%;
  margin: auto;
  height: 80%;
  text-align: left;
  padding-top: 10%;
  padding-bottom: 10%;
    
}

.left {
  background-color: #4CAF50;
  height: 100%;
  text-align: left;
  width: 90%;
  float: left;
}

.section {
  background-color: #9400D3;
  width: 80%;
  height: 15%;
  text-align: left;
  padding-left: 3%;
  padding: 3%;
}

.input{
  width: 95%;
  background-color: #ADFF2F;
}

.selection {
  background-color: #9400D3;
  width: 100%;
}

.right {
  background-color:#F5F5DC;
  height: 100%;
  width: 10%;
  float: right;
  text-align: right;
  padding-top: 40%;
  padding-bottom: 30%;
  
}
.radio {
  background-color:#F5F5DC;
  width: 40%;
}
.radio1 {
  background-color:#F5F5DC;
  width: 40%;
  float: right;
}
.radio2 {
  background-color:#F5F5DC;
  width: 40%;
  float: left;
}


.buttons{
  padding-top: 50%;
}

.main{
  height: 100%;
  width: 100%;
  background-color: #FFD700;
}

</style>

<script lang="ts">
// use TypeScript here
</script>