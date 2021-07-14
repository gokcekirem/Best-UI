<template>

<div class="listing bg-gray-200">
  <div class="left">
    <div class="title title text-3xl block"><h2>Listing Creation</h2></div>
    
    <div class = "section bg-gray-200">
    <div class="section">
      <label class="title" for="fname">Amount</label>
      <div class="comment" >
        <h6>Denotes the amount of electricity you would like to buy/sell in MVU*. (Minimum Viable Unit)</h6>
      </div>
      <input type="text" id="fname" class="input bg-gray-300" name="firstname" placeholder="Please enter a number" >
        
      </div>
    
    <div class="section">
      <label class="title" for="fname">Unit Price</label>
      <div class="comment">
      <h6>Denotes the MVU* price of the electricity you would like to buy/sell from. (Minimum Viable Unit)</h6>
    </div>
     <input type="text" id="fname" class="input bg-gray-300" name="firstname" placeholder="Please enter a number">  
    </div>
    
    <div class="section">
      <label class="title" for="fname">Matcher Node ID</label>
      <div class="comment">
      <h6>Every matching node corresponds to a micro marketplace, please specift in which marketplace you would like to participate in</h6>
    </div>
     <input type="text" id="fname" class="input bg-gray-300" name="firstname" placeholder="Please enter a string">  
    </div>
    
    <div class="section">
      <label class="title" for="fname">Energy Type</label>
      <div class="comment">
      <h6>Type of the energy you would like to buy/sell. In many marketplaces, the final unit prices will differ based on the enery type.</h6>
    </div>
      <div><label class="radio1 bg-gray-500" width="50%" align="left">Non-Renewable
  <input type="checkbox">
  <span class="checkmark"></span>
</label></div>
      <div><label class="radio2 bg-gray-300" width="50%" float="right">Renewable
  <input type="checkbox">
  <span class="checkmark"></span>
</label></div>
    </div>
    </div>
    
  </div>

  

  <div class="right">
    <div class="middle block">
      <h2>To</h2>
    </div>
    <div class="buttons">
    <br><label class="container bg-gray-500">Sell
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>
    <br><label class="container">Buy
  <input type="checkbox" checked="checked">
  <span class="checkmark"></span>
</label>
  </div>
  </div>
</div>

</template>

<style scoped>

.listing {
  width: 50%;
  margin: auto;
  height: 80%;
  text-align: left;
  padding: 1%;
  border-radius: 8%;
}

.left {
  height: 100%;
  text-align: left;
  width: 85%;
  float: left;
  padding-left: 3%;
}

.section {
  width: 90%;
  text-align: left;
  padding-bottom: 1%;
  border-radius: 0.5%;
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
}

.input{
  width: 95%;
  height: 40px;
  border-radius: 0.5%;
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
}

.selection {
  background-color: #9400D3;
  width: 100%;
  padding:1%;
}

.middle {
  float: left;
}

.right {
  height: 100%;
  width: 15%;
  float: right;
  text-align: center;
  padding-top: 30%;
}
.radio {
  background-color:#F5F5DC;
  
}
.container {
  display: block;
  position: relative;
  padding-left: auto;
  margin-bottom: auto;
  cursor: pointer;
  font-size: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: auto;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: auto;
  top: auto;
  width: auto;
  height: auto;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.radio1 {
  width: 40%;
  float: right;
  padding-top: 2%;
  text-align: center;
  border-radius: 0.5%;
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
}
.radio2 {
  width: 40%;
  float: left;
  padding-top: 2%;
  text-align: center;
  border-radius: 0.5%;
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
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