<template>
  <v-container>
    <v-row class="d-flex align-center justify-center text-h6">
      <v-btn @click="newCardSet" color="primary" class="ma-4">new card set</v-btn>
    </v-row>
    <v-row class="d-flex align-center justify-center">
      <div v-if="showEmptyMessage">No card sets created yet. Click the button above to create one.</div>
      <Deck v-else v-for="card in getCards" :cardData="card" :key="card.data"/>
    </v-row>
  </v-container>
</template>
<script>
import { getUserCardsUrl, jsonContentHeader, getAuthToken } from '../../config/api'
import Deck from './Deck.vue'
export default {
  name: 'Cards',
  components: {
    Deck
  },
  mounted() {
    const { _id, token } = this.$store.getters.user
    const userCardsUrl = getUserCardsUrl(_id)
    const reqHeaders = {
      headers: {
        ...jsonContentHeader,
        ...getAuthToken(token)
      }
    }
    this.$http.get(
      userCardsUrl,
      reqHeaders
    ).then((res) => {
      const { data } = res
      this.$store.dispatch('SET_CARDS', data.cards)
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    newCardSet() {
      this.$router.push('/cards/create')
    }
  },
  computed: {
    showEmptyMessage() {
      return this.$store.getters.cards.length === 0
    },
    getCards() {
      return this.$store.getters.cards
    }
  }
}
</script>
<style scoped>
</style>
