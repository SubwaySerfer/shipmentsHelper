<template>
  <section class="wrapper">
    <div>head</div>
    <div class="main-box">
      <div>
        <textarea
          name="initial"
          id="initArea"
          cols="20"
          rows="20"
          class="initial-text"
          v-model="initialArea"
        >
        </textarea>
        <buttons-area
          @del-text="deleteTextArea('initialArea')"
          @copy-text="copyTextArea('initialArea')"
        ></buttons-area>
      </div>
      <button class="btn-transform" @click="transformation">Transform</button>
      <div>
        <textarea
          name="finally"
          id="finArea"
          cols="20"
          rows="20"
          class="finally-text"
          readonly
          v-model="finAreaText"
        ></textarea>
        <buttons-area
          @del-text="deleteTextArea('finAreaText')"
          @copy-text="copyTextArea('finAreaText')"
        ></buttons-area>
      </div>
    </div>
    <div>footer</div>
  </section>
</template>

<script>
import ButtonsArea from "./ButtonsArea.vue";
export default {
  data() {
    return {
      initialArea: "",
      finAreaText: "",
    };
  },
  components: {
    ButtonsArea,
  },
  methods: {
    deleteTextArea(nameArea) {
      if (nameArea == "initialArea") {
        this.initialArea = "";
      } else if (nameArea == "finAreaText") this.finAreaText = "";
    },
    copyTextArea(nameArea) {
      try {
        if (nameArea == "initialArea") {
          navigator.clipboard.writeText(this.initialArea);
        } else if (nameArea == "finAreaText") {
          navigator.clipboard.writeText(this.finAreaText);
        }
      } catch (e) {
        throw e;
      }
    },
    transformation() {
      //TODO: проверку на пустой входной массив
      const finArr = [];
      let newArr;
      let data = this.initialArea.trim();
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
      this.finAreaText = finArr.join(",").replace(/,/g, " \n");
      // console.log(finArr.join(",").replace(/,/g, " \n"));
    },
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
