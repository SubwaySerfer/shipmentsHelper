<template>
  <section class="wrapper">
    <div>head</div>
    <div class="main-box">
      <div>
        <textarea name="initial" id="" cols="20" rows="20" class="initial-text">
aasd
</textarea
        >
        <buttons-area></buttons-area>
      </div>
      <button class="btn-transform">Transform</button>
      <div>
        <textarea
          name="finally"
          id=""
          cols="20"
          rows="20"
          class="finally-text"
        ></textarea>
        <buttons-area></buttons-area>
      </div>
    </div>
    <div>buttons</div>
  </section>
</template>

<script>
import ButtonsArea from "./ButtonsArea.vue";
export default {
  components: {
    ButtonsArea,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 3rem;
}
.main-box {
  display: flex;
  gap: 1rem;
  align-items: center;
}
textarea {
  font-size: 1.6rem;
}
.initial-text {
  border: 3px solid blueviolet;
}
.finally-text {
  border: 3px solid blueviolet;
}
.btn-transform {
  height: 3rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: blueviolet;
  color: white;
  font-weight: bold;
}
</style>
