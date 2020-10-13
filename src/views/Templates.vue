<template>
  <div>
    <WorkoutTemplate
      v-for="template in templates"
      :template="template"
      :key="template.id"
      v-on:delete-exercise="deleteExercise"
    ></WorkoutTemplate>
    <div></div>
  </div>
</template>

<script>
import { deleteExerciseFromTemplate, getTemplates } from '../api'
import WorkoutTemplate from '../components/WorkoutTemplate.vue'
export default {
  components: {
    WorkoutTemplate
  },
  data () {
    return {
      templates: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const data = await getTemplates()
      this.templates = data
    },
    async deleteExercise (tempId, exId) {
      deleteExerciseFromTemplate(tempId, exId)
      this.templates.forEach(temp => {
        if (temp.uuid === tempId) {
          for (const [index, ex] of temp.exercises.entries()) {
            if (ex.uuid === exId) {
              temp.exercises.splice(index, 1)
            }
          }
        }
      })
    }
  }
}
</script>

<style>
</style>
