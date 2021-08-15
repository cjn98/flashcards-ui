<template>
  <div>
    <v-row class="d-flex justify-center align-center mt-4">
      <div class="ma-4 text-h4">{{cardData.name}}</div>
    </v-row>
    <v-row class="d-flex justify-center align-center mt-4">
      <v-btn @click="editCards"><v-icon>{{ editIcon }}</v-icon></v-btn>
      <v-btn @click="resetCards" class="ml-4">reset cards</v-btn>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-card @click="turnOver" class="card d-flex justify-center align-center  pa-5 mt-5">
        <div>{{ getCard }}</div>
      </v-card>
    </v-row>
    <v-row class="d-flex justify-center align-center mt-4">
      <div>{{ getNumCardsLeft }}</div>
    </v-row>
    <v-row class="d-flex justify-center align-center mt-4">
      <v-btn @click="prevCard" class="mr-4">&lt;</v-btn>
      <v-btn @click="setAsideCard">set aside this card</v-btn>
      <v-btn @click="nextCard" class="ml-4">&gt;</v-btn>
    </v-row>
  </div>
</template>

<script>
import { mdiPencil } from '@mdi/js'
export default {
  name: 'CardViewer',
  props: ['cardData'],
  data() {
    return {
      currentCard: 0,
      flip: true,
      editIcon: mdiPencil,
      setAsideCards: []
    }
  },
  methods: {
    nextCard() {
      this.flip = true
      let nextIndex = this.currentCard + 1
      while (this.setAsideCards.includes(nextIndex)) {
        nextIndex++
      }
      if (nextIndex < this.cardData.cardList.length) this.currentCard = nextIndex
    },
    prevCard() {
      this.flip = true
      let prevIndex = this.currentCard - 1
      while (this.setAsideCards.includes(prevIndex)) {
        prevIndex--
      }
      if (prevIndex >= 0) this.currentCard = prevIndex
    },
    turnOver() {
      this.flip = !this.flip
    },
    editCards() {
      this.$store.dispatch('SET_EDIT_MODE', true)
    },
    setAsideCard() {
      this.setAsideCards.push(this.currentCard)
      this.nextCard()
    },
    resetCards() {
      this.setAsideCards = []
      this.currentCard = 0
    }
  },
  computed: {
    getCard() {
      const card = this.cardData?.cardList[this.currentCard]
      return this.flip ? card?.front : card?.back
    },
    getNumCardsLeft() {
      return `${this.currentCard + 1}/${this.cardData.cardList.length}`
    },
    getPrevDisabled() {
      return this.currentCard === 0
    },
    getNextDisabled() {
      return this.currentCard === this.cardData.cardList.length - 1
    }
  }
}
</script>

<style scoped>
  .card {
    width: 30rem;
    min-height: 15rem;
  }
</style>