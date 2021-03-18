<template>
  <div class="d-flex justify-center align-center">
    <v-btn @click="prevCard" class="mr-4">&lt;</v-btn>
    <v-card @click="turnOver" class="card pa-5 mt-5">
      <v-row justify="center" align="center">
        <v-col class="d-flex ">
          {{ getCard }}
        </v-col>
      </v-row>
    </v-card>
    <v-btn @click="nextCard" class="ml-4">&gt;</v-btn>
  </div>
</template>
<script>
export default {
  name: 'CardsEditor',
  data() {
    return {
      cardData: null,
      currentCard: 0,
      flip: true
    }
  },
  mounted() {
    this.cardData = this.$store.getters.cards.find(cards => cards._id === this.$route.params.id)
  },
  methods: {
    nextCard() {
      if (this.currentCard < this.cardData.cardList.length - 1) this.currentCard++
    },
    prevCard() {
      if (this.currentCard > 0) this.currentCard--
    },
    turnOver() {
      this.flip = !this.flip
    }
  },
  computed: {
    getCard() {
      const card = this.cardData?.cardList[this.currentCard]
      return this.flip ? card?.front : card?.back
    }
  }
}
</script>
<style scoped>
.card {
  width: 30rem;
  height: 15rem;
}
</style>
