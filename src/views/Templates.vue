<template>
  <div>
    <Template
      v-for="template in templates"
      :template="template"
      :key="template.id"
    />
  </div>
</template>

<script>
import { getTemplates } from '../api'
import Template from '../components/Template.vue'
export default {
  components: {
    Template
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
      console.log(data)
      this.templates = data
    }
  }
}
</script>

<style>
</style>
