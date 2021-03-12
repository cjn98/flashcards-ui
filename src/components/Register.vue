<template>
   <v-card class="register
    mt-2">
    <h1>Register</h1>
    <div class="ma-1 field">
      <div>Username:</div>
      <input  class="pa-1" type="text"/>
    </div>
    <div class="ma-1 field">
      <div>Email:</div>
      <input  class="pa-1" type="text"/>
    </div>
    <div class="ma-1 field">
      <div>Password:</div>
      <input class="pa-1" type="password"/>
    </div>
    <v-btn class="mt-4" color="primary">Register</v-btn>
  </v-card>
</template>
<script>
export default {
  name: 'Register'
}
</script>

<style scoped>
  .register
   {
    width: 33%;
    display: flex;
    margin: auto;
    flex-direction: column;
    padding : 1rem;
    align-items: center;
  }
  .register
   input {
    background-color: white;
    border-radius: 0.25rem;
  }
</style>