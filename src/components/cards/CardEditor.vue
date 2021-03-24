<template>
  <div class="d-flex justify-center align-center flex-column">
    <v-card class="pa-10 ma-4 d-flex flex-column justify-center align-center">
      <div class="d-flex flex-column">        
        <v-text-field v-model="cardData.name" label="name" class="mr-4"/>
        <v-text-field v-model="cardData.description" label="description"/>
      </div>
      <v-divider v-if="showCards" dark class="divider mb-2"/>
      <v-card v-for="(card, i) in cardData.cardList" 
        :key="i" 
        :elevation="10" 
        class="d-flex align-center card-list pa-4 ma-2"
      >
        <div class="mr-4">{{i + 1}}</div>
        <v-text-field v-model="card.front" label="front"/>
        <v-text-field v-model="card.back" label="back" class="ml-4"/>
        <v-icon class="ml-2" @click="deleteCard(i)">{{ deleteIcon }}</v-icon>
      </v-card>
      <v-btn @click="addCard" color="primary" class="mt-4">add card</v-btn>
    </v-card>
    <v-btn @click="saveCardSet" color="primary">save</v-btn>
    <v-snackbar :timeout="2000" v-model="showSuccess">{{ snackbarText }}</v-snackbar>
  </div>
</template>

<script>
import { cardsUrl, getAuthToken, jsonContentHeader } from '../../config/api'
import { mdiDelete } from '@mdi/js'
export default {
  name: 'CardsEditor',
  props: ['cardData'],
  data() {
    return {
      showSuccess: false,
      snackbarText: '',
      deleteIcon: mdiDelete
    }
  },
  methods: {
    addCard() {
      this.cardData.cardList.push({front: '', back: ''})
    },
    deleteCard(i) {
      this.cardData.cardList.splice(i, 1)
    },
    saveCardSet() {
      const { _id, token } = this.$store.getters.user
      const reqBody = {
        name: this.cardData.name,
        cardList: this.cardData.cardList.filter(card => card.front !== '' && card.back !== ''),
        userId: _id
      }
      if (this.cardData.description) reqBody.description = this.cardData.description
      const reqHeaders = {
        headers: {
          ...jsonContentHeader,
          ...getAuthToken(token)   
        }
      }
      this.cardData._id ?
        this.updateDeck(reqBody, reqHeaders, this.cardData._id) : 
        this.createDeck(reqBody, reqHeaders)
    },
    createDeck(reqBody, reqHeaders) {
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
    },
    updateDeck(reqBody, reqHeaders, id) {
      this.$http.put(
        `${cardsUrl}/${id}`,
        reqBody,
        reqHeaders
      ).then(() => {
        this.showSuccess = true
        this.snackbarText = 'deck updated'
      }).catch((err) => {
        console.log(err)
      }) 
    }
  },
  computed: {
    showCards() {
      return this.cardData.cardList.length > 0
    }
  }
}
</script>

<style scoped>
  .divider {
    width: 100%
  }
</style>