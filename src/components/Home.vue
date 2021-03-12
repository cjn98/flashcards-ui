<template>
  <v-card class="home mt-4 pa-4">
    <v-container fill-height fluid>
      <v-row class="ma-4" align="center" justify="center">
        <body-1>Welcome to Flashcards, a <a href="https://quizlet.com/">quizlet</a> clone built entirely with javascript.</body-1>
      </v-row>
      <v-row align="center" justify="center">
        <a href="https://vuetifyjs.com/">
          <img :src="vuetify"/>
        </a>
        <a href="https://vuejs.org/">
          <img :src="vuejs"/>
        </a>
        <a href="https://expressjs.com/">
          <img :src="express"/>
        </a>
        <a href="https://nodejs.org/">
          <img :src="node"/>
        </a>
        <a href="https://www.mongodb.com/">
          <img :src="mongo"/>
        </a>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'Home',
  data: () => {
    return {
      express: require('../assets/img/expressjs.svg'),
      mongo: require('../assets/img/mongodb.svg'),
      node: require('../assets/img/node.svg'),
      vuejs: require('../assets/img/vue.svg'),
      vuetify: require('../assets/img/vuetify.svg')
    }
  }
}
</script>
<style scoped>
  img {
    max-width: 10rem;
    max-height: 5rem;
    margin: 1rem;
  }
  .home {
    margin: auto;
    width: 50%;
  }
  a img { 
    display: block;
  }
</style>
