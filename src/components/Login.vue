<template>
  <v-card class="login mt-2">
    <h1>Login</h1>
    <div class="ma-1 field">
      <div>Username:</div>
      <input  class="pa-1" type="text"/>
    </div>
    <div class="ma-1 field">
      <div>Password:</div>
      <input class="pa-1" type="password"/>
    </div>
    <v-btn class="mt-4" color="primary">Login</v-btn>
    <div class="mt-4">Don't have an account?</div>
    <router-link to="register">Register</router-link>
  </v-card>
</template>
<script>
export default {
  name: 'Login'
}
</script>
<style scoped>
  .login {
    width: 33%;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding : 1rem;
    align-items: center;
  }
  .login input {
    background-color: white;
    border-radius: 0.25rem;
  }
</style>