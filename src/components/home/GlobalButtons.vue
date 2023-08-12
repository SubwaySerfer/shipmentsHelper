<template>
  <div class="buttons-box">
    <button class="btn-transform btn" @click="transformation">Transform</button>
    <button class="btn btn-refresh" @click="this.$emit('refresh-areas')">
      Refresh
    </button>
  </div>
</template>

<script>
export default {
  props: {
    initialText: {
      type: String || Number,
      default: null,
    },
  },
  emits: ["get-textarea", "refresh-areas"],
  data() {
    return { currentText: "" };
  },

  methods: {
    transformation() {
      //TODO: проверку на пустой входной массив
      const finArr = [];
      let newArr;
      let data = this.initialText.trim();
      if (data.includes("\n")) {
        newArr = data.split("\n");
      } else if (data.includes(" ")) {
        newArr = data.split(" ");
      }
      newArr.forEach((el) => {
        if (el.length == 13 && el.slice(0, 5) == "10000") {
          finArr.push(el.slice(5, -1));
        } else {
          finArr.push(el);
        }
      });

      this.$emit("get-textarea", finArr.join(",").replace(/,/g, " \n"));
    },
  },
};
</script>

<style scoped>
.buttons-box {
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: center;
  gap: 3rem;
}

.btn {
  height: 3rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
.btn-transform {
  background-color: blueviolet;
  color: white;
}
.btn-refresh {
  background-color: greenyellow;
  color: black;
}
</style>
