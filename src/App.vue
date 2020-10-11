<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/exercises">Exercises</router-link> |
    <router-link to="/templates">Templates</router-link> |
    <router-link to="/workout">Workout</router-link>
  </div>
  <router-view/>
</template>

<style>

:root {
  --bg-color: #34374c;
  --fg-color: #2c2e3e;
  --accent-color: #ee2b47;
  --vue-green: #42b983;
}

* {
  margin: 0;
  padding: 0;
}

/* This makes size include padding */
/* *, *:before, *:after {
  box-sizing: border-box;
} */

html, body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--bg-color);
  color: var(--accent-color);
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #73abe4;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
