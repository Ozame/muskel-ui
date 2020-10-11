<template>
  <div class="exercise" :class="{ expanded: isExpanded }">
    <div class="ex-img" @click="[(isExpanded = !isExpanded)]">
      <img src="../assets/muskel.jpg" alt="logo" />
    </div>
    <div class="ex-desc">
      <h4 v-if="!isExpanded">{{ ex.name }}</h4>
      <input v-else type="text" :disabled="!isEditable" v-model="ex.name" />
      <div v-if="isExpanded" class="expanded-info">
        <!-- <p class="ex-type" :title="ex.type">{{ ex.type[0] }}</p> -->
        <textarea
          :disabled="!isEditable"
          v-model="ex.description"
          class="ex-desc-text"
        ></textarea>
        <div class="buttons">
          <button v-if="!isEditable" @click="isEditable = !isEditable">
            Edit
          </button>
          <button v-if="isEditable" @click="deleteExercise">Delete</button>
          <button v-if="isEditable" @click="updateExercise">Save</button>
          <button v-if="isEditable" @click="cancelEdit">Cancel</button>
        </div>
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
    },
    deleteExercise (e) {
      if (confirm(`Are you sure you want to delete ${this.ex.name}?`)) {
        this.$emit('delete-exercise', this.ex)
      }
    }
  }
}
</script>

<style scoped>
.exercise {
  background-color: var(--accent-color);
  color: whitesmoke;
  padding: 4px;
  margin: 5px 5px;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  /* height: calc(10vmin + 8px); */
  width: calc(50vmin - 20px);
}

input[type="text"] {
  padding: 2px;
  border: 0;
  /* border-bottom: 5px solid #73abe4; */
  background-color: var(--accent-color);
  color: whitesmoke;
  width: 100%;
  font-size: 1em;
  font-weight: bold;
}

.expanded {
  width: 95vmin;
  height: 60vmin;
  margin: 5px auto;
}

.expanded .ex-img img {
  width: 25vmin;
  height: auto;
}

.ex-img {
  flex: 1 1;
  /* max-width: 100px; */
}
.ex-img img {
  width: 10vmin;
  height: 10vmin;
}

.ex-desc {
  flex: 2 2 auto;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
}

.expanded-info {
  height: 80%;
  display: flex;
  flex-direction: column;
}

.ex-desc-text {
  background-color: #18538f;
  color: whitesmoke;
  padding: 5px;
  margin: 4px;
  border-radius: 8px;
  border: 0;
  box-shadow: 2px 2px 2px 2px #112f4d;
  resize: none;
  text-align: left;
  min-height: 60%;
}

.buttons {
  align-self: flex-end;
}
button {
  margin: 5px;
  border: none;
  background-color: #18538f;
  color: whitesmoke;
  padding: 4px 8px;
  border-radius: 8px;
  width: 15vmin;
}
</style>
