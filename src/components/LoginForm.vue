<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h2>Sign in</h2>
      <label for="username">Username</label>
      <input
        v-model="username"
        required
        type="text"
        placeholder="your username"
      />
      <label for="password">Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { postLogin } from '../api'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const username = this.username
      const password = this.password
      console.log(username + '' + password)
      postLogin(username, password)
    }
  }
}
</script>

<style>
</style>
