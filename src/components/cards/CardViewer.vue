<template>
  <div>
    <v-row class="d-flex justify-center align-center mt-4">
      <div>{{cardData.name}}</div>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-card @click="turnOver" class="card d-flex justify-center align-center  pa-5 mt-5">
        <div>{{ getCard }}</div>
      </v-card>
    </v-row>
    <v-row class="d-flex justify-center align-center mt-4">
      <v-btn @click="prevCard" class="mr-4">&lt;</v-btn>
      <v-btn @click="editCards"><v-icon>{{ editIcon }}</v-icon></v-btn>
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
      editIcon: mdiPencil
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
    editCards() {
      this.$emit('editMode', true)
    },
  },
  computed: {
    getCard() {
      const card = this.cardData?.cardList[this.currentCard]
      return this.flip ? card?.front : card?.back
    },
  }
}
</script>

<style scoped>
  .card {
    width: 30rem;
    height: 15rem;
  }
</style>