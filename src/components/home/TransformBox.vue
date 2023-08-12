<template>
  <section class="wrapper">
    <div>head</div>
    <div class="main-box">
      <div>
        <textarea name="initial" id="" cols="20" rows="20" class="initial-text">
aasd
</textarea
        >
        <div>buttons</div>
      </div>
      <div>
        <textarea
          name="finally"
          id=""
          cols="20"
          rows="20"
          class="finally-text"
        ></textarea>
        <div>buttons</div>
      </div>
    </div>
    <div>buttons</div>
  </section>
</template>

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
  gap: 2rem;
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
</style>
