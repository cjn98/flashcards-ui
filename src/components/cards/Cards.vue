<template>
  <div class="card-container">
    <Card v-for="card in cards" :cardData="card" :key="card.data"/>
  </div>
</template>
<script>
import { getUserCardsUrl, jsonContentHeader } from '../../config/api'
import Card from './Card.vue'
export default {
  name: 'Cards',
  components: {
    Card
  },
  data() {
    return {
      cards: null
    }
  },
  mounted() {
    // get userid
    const userCardsUrl = getUserCardsUrl(this.$store.getters.user._id)
    this.$http.get(
      userCardsUrl,
      jsonContentHeader
    ).then((res) => {
      const { data } = res
      this.cards = data.cards
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
