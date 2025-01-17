<template>
  <div class="main">
    <SessionContainer/>
  </div>
</template>


<script lang="ts" setup>
  definePageMeta({
  middleware: 'login'
})
 
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.main{
  background-image: url("/public/tile_background.png");
  width: 100vw;
  height: 100vh;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>