<template>
  <div class="exercise" :class="{expanded: isExpanded}">
    <div class="ex-img" @click="[isExpanded = !isExpanded]">
      <img src="../assets/muskel.jpg" alt="logo">
    </div>
    <div class="ex-desc">
      <h4>{{ ex.name }}</h4>
      <div v-if="isExpanded" class="expanded-info">
        <p class="ex-type" :title="ex.type">{{ex.type[0]}}</p>
        <textarea :disabled="!isEditable" v-model="ex.description" class="ex-desc-text"></textarea>
        <button v-if="!isEditable" @click="isEditable = !isEditable">Edit</button>
        <button v-if="isEditable" @click="updateExercise">Save</button>
        <button v-if="isEditable" @click="cancelEdit">Cancel</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['exercise'],
  data () {
    return {
      isExpanded: false,
      isEditable: false,
      ex: { ...this.exercise }

    }
  },
  methods: {
    cancelEdit (e) {
      this.isEditable = false
      this.ex = { ...this.exercise }
    },
    updateExercise (e) {
      this.$emit('update-exercise', this.ex)
      this.isEditable = false
    }
  }
}
</script>

<style scoped>
.exercise {
  background-color: var(--accent-color);
  color: var(--fg-color);
  padding: 4px;
  margin: 5px 5px;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  height: calc(10vmin + 8px);
  width: 45vmin;

}

.expanded {
  width: 95vmin;
  height: 95vmin;
}

.expanded .ex-img img {
  width: 100%;
  height: auto;
}

.ex-img {
  flex: 1 1;
  /* max-width: 100px; */
  min-width: 10vmin;
}
.ex-img img {
  /* width: 64px;
  height: 64px; */
  padding: 4px 0;
  width: 10vmin;
  height: 10vmin;
  /* height: auto; */
}

.ex-desc {
  flex: 2 2;
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.expanded-info {
  height: 80%;
  display: flex;
  flex-direction: column;
}

.ex-desc-text {
  background-color: #73abe4;
  color: black;
  padding: 5px;
  border-radius: 8px;
  text-align: left;
  min-height: 60%;
}

button {
align-self: flex-end;
margin: 5px;
}

</style>
