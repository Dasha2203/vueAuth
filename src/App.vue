<template>
  <router-view/>
</template>

<script>
export default {
  mounted() {
    let path = localStorage.getItem("token") ? '' : '/login';
    this.$router.push(path);
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Ubuntu', sans-serif;
}

#app {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: seagreen;
}

.container {
  width: 100%;
  padding: 0 20px;
}
</style>
