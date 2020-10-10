<template>
  <div class="exercise">
    <div class="ex-img">
      <img src="../assets/muskel.jpg" alt="logo">
    </div>
    <div class="ex-desc" :title="exercise.description">
      <p >{{ exercise.name }}</p>
      <!-- <p>{{ exercise.description }}</p> -->
    </div>

  </div>
</template>

<script>
export default {
  props: ['exercise'],
  data () {
    return {
      isExpanded: false,
      isEditable: false
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
}
</style>
