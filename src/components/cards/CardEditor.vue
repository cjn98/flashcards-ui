<template>
  <v-container class="d-flex flex-column">
    <v-row class="justify-center mb-4">
      <v-col cols="8">
        <v-card class="d-flex flex-column pa-8">
          <v-text-field
            v-model="cardData.name" 
            label="name" 
            class="mr-4"
          />
          <v-textarea
            v-model="cardData.description" 
            filled 
            auto-grow
            row-height="8" 
            label="description"
          />
          <v-card 
            v-for="(card, i) in cardData.cardList" 
            :key="i" 
            :elevation="8"
            outlined
            class="d-flex align-center justify-center px-4 my-4"
          >
            <div>{{i + 1}}.</div>
            <v-textarea 
              filled 
              auto-grow 
              row-height="8"
              v-model="card.front" 
              class="flex-grow-1 ml-4 pt-6" 
              label="front"
            />
            <v-textarea 
              filled 
              auto-grow 
              row-height="8"
              v-model="card.back" 
              class="flex-grow-1 ml-4 pt-6" 
              label="back"
            />
            <v-icon class=" ml-4" @click="deleteCard(i)">{{ deleteIcon }}</v-icon>
          </v-card>
          <v-btn @click="addCard" color="primary" class="ma-auto">add card</v-btn>
        </v-card>
        <div class="d-flex mt-4">
          <v-btn @click="studyCards" class="ma-auto" color="primary">study</v-btn>
          <v-btn @click="saveCardSet" class="ma-auto" color="primary">save</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-snackbar :timeout="2000" v-model="showSuccess">{{ snackbarText }}</v-snackbar>
  </v-container>
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
    },
    studyCards() {
      this.$store.dispatch('SET_EDIT_MODE', false)
    },
  }
}
</script>

<style scoped>
</style>