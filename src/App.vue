<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>

<template>
  <div class="content-wrapper">
    <the-header></the-header>
    <router-view class="wrapper" v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
} */
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
html {
  font-size: 10px;
  font-family: "Poppins", sans-serif;
}
.content-wrapper {
  /* max-width: 1440px; */
  background-color: aliceblue;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  max-width: 1440px;
  width: 100%;
  height: 100%;
}
</style>

<style>
body {
  margin: 0;
}
#app {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul {
  padding-left: 0;
}
</style>
