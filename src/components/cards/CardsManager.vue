<template>

  <div>

    <!--  split out -->
    <div v-if="edit" class="d-flex justify-center align-center flex-column">
      <v-card class="pa-4 ma-4 d-flex justify-center align-center">
        <v-text-field v-model="cardData.name" label="name"/>
        <v-btn @click="saveCardSet" color="primary" class="ml-12">save</v-btn>
      </v-card>
      <v-card v-for="(card, i) in cardData.cardList" :key="i" class="d-flex align-center card-list pa-4 ma-2">
        <div class="mr-4">{{i + 1}}</div>
        <v-text-field v-model="card.front" label="front"/>
        <v-text-field v-model="card.back" label="back" class="ml-4"/>
      </v-card>
      <v-btn @click="addCard" color="primary" class="mt-4">add card</v-btn>
    </div>

    <!-- split out -->
    <div v-else  class="d-flex justify-center align-center"> 
      <v-btn @click="prevCard" class="mr-4">&lt;</v-btn>
      <v-card @click="turnOver" class="card pa-5 mt-5">
        <v-row justify="center" align="center">
          <v-col class="d-flex">
            {{ getCard }}
          </v-col>
        </v-row>
      </v-card>
      <v-btn @click="nextCard" class="ml-4">&gt;</v-btn>
    </div>
    <v-snackbar :timeout="2000" v-model="showSuccess">{{ snackbarText }}</v-snackbar>
  </div>
</template>
<script>
import { cardsUrl, getAuthToken, jsonContentHeader } from '../../config/api'
export default {
  name: 'CardsEditor',
  data() {
    return {
      cardData: {
        name: '',
        cardList: []
      },
      currentCard: 0,
      edit: false,
      flip: true,
      showSuccess: false,
      snackbarText: ''
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.cardData = this.$store.getters.cards.find(cards => cards._id === this.$route.params.id)
    } 
    else {
      this.edit = true
    } 
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
    },
    addCard() {
      this.cardData.cardList.push({front: '', back: ''})
    },
    saveCardSet() {
      const { _id, token } = this.$store.getters.user
      const reqBody = {
        name: this.cardData.name,
        cardList: this.cardData.cardList.filter(card => card.front !== '' && card.back !== ''),
        userId: _id
      }
      const reqHeaders = {
        headers: {
          ...jsonContentHeader,
          ...getAuthToken(token)   
        }
      }
      this.$http.post(
        cardsUrl,
        reqBody,
        reqHeaders
      ).then(() => {
        this.showSuccess = true
        this.snackbarText = 'deck created'
      }).catch((err) => {
        console.log(err)
      })
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
  .card-list {
    width: 50%;
  }
</style>
