<template>

<div class="bar bg-MainColorInactive text-bestFontMedium fontMedium fontColorActive">
  <div class="top bg-MainColorActive block">
    <div class="welcome">
        <h2>Welcome to Marketplace!</h2>
    </div>
    <div class="clock fontColorInactive block">
      <h6>Current Market Clock</h6>
    </div>
    <div class="time fontColorInactive block">
      <h6>Current Market Time</h6>
    </div>
  </div>
  <div class="middle bg-MainColorInactive block">
    <div class="buttons">
        <div>
            <div style="width: 20%; float:left">
                <img class="image" src="../assets/images/plus-circle.svg">
            </div>
            <div style="width: 80%; float:right; text-align:left">
                <button class="create active:bg-MainColorActive inactive:bg-MainColorInactive" type="button">Create New Listing</button>
            </div>
        </div>
        <div>
            <div style="width: 20%; float:left">
                <img class="image" src="../assets/images/archive.svg">
            </div>
            <div style="width: 80%; float:right; text-align:left">
                <button class="history active:bg-MainColorActive inactive:bg-MainColorInactive" type="button">Listing History</button>
            </div>
        </div>

    </div>
  </div>
</div>

</template>

<style scoped>
.bar {
  padding: 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 20%;
}

.top {
  height: 33%;
  text-align: center;
}

.welcome {
  height: 60%;
  text-align: center;
}

.clock {
  width: 100%;
  text-align: left;
}
.time {
  width: 100%;
  height: 25%;
  text-align: left;
}

.middle {
  height: 66%;
}

.image {
  padding: 10%;
  width: 90%;
}

.create {
  padding: 10%;
  width: 90%;
}

.history {
  padding: 10%;
  width: 90%;
}

.buttons{
  height: 33%;
}

</style>

<script lang="ts">
// use TypeScript here
</script>
