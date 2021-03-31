<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-card class="d-flex flex-column pa-4">
          <div class="body-1 text-center">Welcome to Flashcards, a <a href="https://quizlet.com/">quizlet</a> clone built entirely with javascript.</div>
          <div class="d-flex justify-center">
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
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    display: block;
    padding: 1rem;
    border-radius: 1rem;
  }
  img:hover {
    box-shadow: 0.2rem 0.2rem 0.5rem #777777;
    background-color: #555555;
  }
</style>
