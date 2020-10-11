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
  <div id="exercise-add">
      <span>+</span>
    </div></div>

</template>

<script>
import Exercise from '../components/Exercise.vue'
import { getExercises, putExercise, deleteExercise } from '../api'
export default {
  components: {
    Exercise
  },
  data () {
    return {
      exercises: []
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

#exercise-add {
  margin: 8px 5px;
  font-size: 2em;
  text-align: center;
  background-color: var(--accent-color);
  color: whitesmoke;
  border-radius: 8px;
}

</style>
