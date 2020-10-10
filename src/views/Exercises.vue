<template>
  <div class="exercises">
    <Exercise
      v-for="exercise in exercises"
      :exercise="exercise"
      :key="exercise.name"
    >
    </Exercise>
  </div>
</template>

<script>
import Exercise from '../components/Exercise.vue'
import { getExercises } from '../api'
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
      console.log(data)
      this.exercises = data
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
  height: 80vh;
}
</style>
