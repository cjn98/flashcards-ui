<template>
  <div class="card-container">
    <Deck v-for="card in cards" :cardData="card" :key="card.data"/>
  </div>
</template>
<script>
import { getUserCardsUrl, jsonContentHeader } from '../../config/api'
import Deck from './Deck.vue'
export default {
  name: 'Cards',
  components: {
    Deck
  },
  data() {
    return {
      cards: null
    }
  },
  mounted() {
    const userCardsUrl = getUserCardsUrl(this.$store.getters.user._id)
    this.$http.get(
      userCardsUrl,
      jsonContentHeader
    ).then((res) => {
      const { data } = res
      this.cards = data.cards
      this.$store.dispatch('SET_CARDS', data.cards)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
<style scoped>
  .card-container {
    display: flex;
  }
</style>
