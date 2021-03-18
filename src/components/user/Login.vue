<template>
  <v-card class="login mt-2">
    <h1>Login</h1>
    <div class="ma-1 field">
      <div>Username:</div>
      <input v-model="username" class="pa-1" type="text"/>
    </div>
    <div class="ma-1 field">
      <div>Password:</div>
      <input v-model="password" class="pa-1" type="password"/>
    </div>
    <v-btn @click="login" class="mt-4" color="primary">Login</v-btn>
    <div class="mt-4">Don't have an account?</div>
    <router-link to="register">Register</router-link>
  </v-card>
</template>
<script>
import { loginUrl, jsonContentHeader } from '../../config/api'
export default {
  
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    login() {
      const reqBody = {
        credential: {
          username: this.username
        },
        password: this.password
      }
      this.$http.post(
        loginUrl,
        reqBody,
        jsonContentHeader
      ).then(res => {
        const { data } = res
        this.$store.dispatch('SET_USER', {...data})
        this.$router.push('/cards')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
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