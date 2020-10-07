<template>
<div class="exercise">
    <p>{{name}}</p>
    <p>{{description}}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Deadlift',
      description: 'Good for the back. Composite exercise.'
    }
  }
}
</script>

<style scoped>
.exercise {
    background-color: chocolate;
}
</style>
