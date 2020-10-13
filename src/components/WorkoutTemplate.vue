<template>
  <div class="template">
    <h3>{{ template.name }}<span>X</span></h3>
    <div class="exercises">
      <div
        v-for="ex in template.exercises"
        :ex="ex"
        :key="ex.id"
        :title="ex.description"
      >
        <p>💪</p>
        <p>{{ ex.name }}</p>
        <p @click="deleteExercise(ex)" ><strong>X</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['template'],
  methods: {
    deleteExercise (ex) {
      if (confirm(`Are you sure you want to delete ${ex.name}`)) {
        this.$emit('delete-exercise', this.template.uuid, ex.uuid)
      }
    }
  }

}
</script>

<style scoped>
.template {
  background-color: var(--fg-color);
  border-radius: 8px;
  margin: 5px 5px;
  padding: 8px;
}
.template h3 {
  text-align: left;
  display: flex;
  justify-content: space-between;
}

.exercises {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
}

.exercises div {
  width: 50vmin;
  margin: 4px;
  display: grid;
  grid-template-columns: 1.2em 1fr 1em;
}

</style>
