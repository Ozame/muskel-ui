<template>
  <h1>Welcome, I see you want to lift</h1>
  <LoginForm></LoginForm>>
  <img src="../assets/arnold.jpg" alt="Arnold ">
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
img {
  width: 80vmin;
  height: auto;
}
</style>
