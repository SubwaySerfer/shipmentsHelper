<template>
  <section class="wrapper">
    <div></div>
    <div class="main-box">
      <div class="card">
        <textarea
          name="initial"
          id="initArea"
          cols="20"
          rows="20"
          class="initial-text"
          v-model="initialText"
        >
        </textarea>
        <card-buttons
          @del-text="deleteTextArea('initialText')"
          @copy-text="copyTextArea('initialText')"
        >
        </card-buttons>
      </div>

      <global-buttons
        :initialText="this.initialText"
        @get-textarea="getTextArea"
        @refresh-areas="refreashTextAreas"
      ></global-buttons>

      <div class="card">
        <textarea
          name="finally"
          id="finArea"
          cols="20"
          rows="20"
          class="finally-text"
          readonly
          v-model="finAreaText"
          @click="copyTextArea('finAreaText')"
        ></textarea>
        <card-buttons
          @del-text="deleteTextArea('finAreaText')"
          @copy-text="copyTextArea('finAreaText')"
        >
        </card-buttons>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script>
import CardButtons from "./CardButtons.vue";
import GlobalButtons from "./GlobalButtons.vue";

export default {
  data() {
    return {
      initialText: "",
      finAreaText: "",
    };
  },
  components: {
    CardButtons,
    GlobalButtons,
  },
  methods: {
    deleteTextArea(nameArea) {
      if (nameArea == "initialText") {
        this.initialText = "";
      } else if (nameArea == "finAreaText") this.finAreaText = "";
    },
    copyTextArea(nameArea) {
      try {
        if (nameArea == "initialText") {
          navigator.clipboard.writeText(this.initialText);
        } else if (nameArea == "finAreaText") {
          navigator.clipboard.writeText(this.finAreaText);
        }
      } catch (e) {
        throw e;
      }
    },
    getTextArea(arr) {
      this.finAreaText = arr;
    },
    refreashTextAreas() {
      this.finAreaText = "";
      this.initialText = "";
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
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
textarea {
  font-size: 1.6rem;
}
.initial-text {
  border: 3px solid blueviolet;
}
.finally-text {
  border: 3px solid blueviolet;
  cursor: copy;
}
</style>
