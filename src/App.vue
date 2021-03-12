<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <router-link to="/" >
          <div class="router-link"><h3>Flashcards</h3></div>
        </router-link>
      </div>
      <v-spacer/>
      <div class="text-center">
        <v-row align="center" justify="center">
          <router-link to="login">
            <div class="router-link">Login</div>
          </router-link>
          <v-btn @click="register" class="ma-2">sign up</v-btn>
        </v-row>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({}),

  methods: {
    register() {
      this.$router.push('register')
    }
  }
}
</script>

<style scoped>
  @import './assets/css/global.css';
</style>
