<template>

<div class="bar">
  <div class="top">
    <h2>Welcome to Marketplace!</h2>
    <div class="clock">
      <h6>Current Market Clock</h6>
    </div>
    <div class="time">
      <h6>Current Market Time</h6>
    </div>
  </div>
  <div class="middle bg-MainColorInactive text-bestFontSmall">
    <div class="buttons">
    <br><button class="create" type="submit">Create New Listing</button>
    <br><button class="history" type="submit">Listing History</button>
  </div>
  </div>
</div>

</template>

<style scoped>
.bar {
  padding: 10px;
  background: #7FFFD4;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 20%;
}

.top {
  background-color: #4CAF50;
  height: 33%;
  text-align: center;
}

.clock {
  background-color: #9400D3;
  width: 100%;
}
.time {
  background-color: #FF1493;
  width: 100%;
  height: -10%;
}

.middle {
  height: 66%;
}

.create {
  background-color: #4CAF50;
  font-size: 10px;
  padding: 16px;
  width: 100%;
}

.history {
  background-color: #FFD700;
  font-size: 10px;
  padding: 16px;
  width: 100%;
}

.buttons{
  height: 33%;
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
