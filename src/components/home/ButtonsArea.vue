<template>
  <section class="buttons-wrapper">
    <button class="btn-area btn-copy" @click="initialCopy">COPY</button>
    <button class="btn-area btn-del" @click="initialDel">DELETE</button>
  </section>
</template>

<script>
export default {
  emits: ["del-text", "copy-text"],
  methods: {
    initialDel() {
      this.$emit("del-text");
    },
    initialCopy() {
      this.$emit("copy-text");
    },
  },
};
</script>

<style scoped>
.buttons-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  align-items: center;
}
.btn-area {
  height: 2rem;
  padding: 2px 5px;
  width: 7rem;
  border: 2px solid;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
.btn-del {
  background-color: rgb(179, 4, 4);
}
.btn-copy {
  background-color: rgb(26, 143, 5);
}
</style>
