<template>
  <div>
    <div class="exercises">
      <Exercise
        v-for="exercise in exercises"
        :exercise="exercise"
        :key="exercise.name"
        v-on:update-exercise="updateExercise"
        v-on:delete-exercise="deleteExercise"
      >
      </Exercise>
    </div>
    <div class="exercise-add"  :class="{ expanded: formExpanded }">
      <span @click="[(formExpanded = !formExpanded)]">+</span>
      <div class="exercise" v-if="formExpanded">
        <div class="ex-img" >
          <img src="../assets/muskel.jpg" alt="logo" />
        </div>
        <div class="ex-desc">
          <input type="text" v-model.trim="newExercise.name" placeholder="Exercise name"/>
          <div class="expanded-info">
            <!-- <p class="ex-type" :title="ex.type">{{ ex.type[0] }}</p> -->
            <textarea
              v-model.trim="newExercise.description"
              class="ex-desc-text"
              placeholder="Exercise description"
            ></textarea>
            <div class="buttons">

              <button @click="addExercise">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Exercise from '../components/Exercise.vue'
import { getExercises, putExercise, deleteExercise, postExercise } from '../api'
export default {
  components: {
    Exercise
  },
  data () {
    return {
      exercises: [],
      formExpanded: false,
      newExercise: { name: '', description: '' }
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const data = await getExercises()
      this.exercises = data
    },
    async updateExercise (updated) {
      const saved = await putExercise(updated)
      // Here the current exercise list is updated
      for (const [index, el] of this.exercises.entries()) {
        if (el.uuid === saved.uuid) {
          this.exercises.splice(index, 1, saved)
        }
      }
    },
    async deleteExercise (ex) {
      await deleteExercise(ex.uuid)
      for (const [index, el] of this.exercises.entries()) {
        if (el.uuid === ex.uuid) {
          this.exercises.splice(index, 1)
        }
      }
    },
    async addExercise () {
      console.log(this.newExercise)
      const saved = await postExercise(this.newExercise)
      // Here the current exercise list is updated
      this.exercises = [...this.exercises, saved]
      this.newExercise = { name: '', description: '' }
      this.formExpanded = false
    }
  }
}
</script>

<style scoped>
.exercises {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  /* height: 80vh; */
}

.exercise-add {
  margin: 8px 5px;
  font-size: 2em;
  text-align: center;
  background-color: var(--accent-color);
  color: whitesmoke;
  border-radius: 8px;
}

.exercise-add span {
  display: inline-block;
  width: 100%;
}

.exercise-add .exercise {
  background-color: var(--accent-color);
  color: whitesmoke;
  padding: 4px;
  margin: 8px auto;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  /* width: calc(50vmin - 20px); */
  height: 50vmin;
  width: 95vmin;
}

.expanded {
  height: 60vmin;
}

/* ======Copied from exercise component, TODO: generalize form======= */

.exercise-add  input[type="text"] {
  padding: 2px;
  border: 0;
  /* border-bottom: 5px solid #73abe4; */
  background-color: var(--accent-color);
  color: whitesmoke;
  width: 100%;
  font-size: 0.5em;
  font-weight: bold;
}

.exercise-add .ex-img img {
  width: 25vmin;
  height: auto;
}

.exercise-add  .ex-img {
  flex: 1 1;
  /* max-width: 100px; */
}

.exercise-add  .ex-desc {
  flex: 2 2 auto;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.exercise-add  .expanded-info {
  height: 80%;
  display: flex;
  flex-direction: column;
}

.exercise-add .ex-desc-text {
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

.exercise-add  .buttons {
  align-self: flex-end;
}
.exercise-add  button {
  margin: 5px;
  border: none;
  background-color: #18538f;
  color: whitesmoke;
  padding: 4px 8px;
  border-radius: 8px;
  width: 15vmin;
}

</style>
