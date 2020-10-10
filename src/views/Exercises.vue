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
export default {
  components: {
    Exercise
  },
  data () {
    return {
      exercises: [
        {
          name: 'Deadlift',
          description: 'Good for the back. Composite exercise.'
        },
        {
          name: 'Bench Press (Incline)',
          description: 'Good for the triceps and the chest.'
        },
        {
          name: 'Bench Press',
          description: 'Good for the triceps and the chest.'
        }
      ]
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
