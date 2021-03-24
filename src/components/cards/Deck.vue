<template>
  <v-card class="card ma-2 pa-2">
    <v-row class="text-h6" align="center" justify="center">
      {{ cardData.name }}
    </v-row>
    <v-row class="text-h6" align="center" justify="center">
      <v-btn @click="editCards">Study</v-btn>
      <v-btn @click="deleteCards" class="ml-4"><v-icon>{{deleteIcon}}</v-icon></v-btn>
    </v-row>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>hello</v-card>
    </v-dialog>
    <v-snackbar :timeout="2000" v-model="showSnackbar">deck deleted</v-snackbar>
  </v-card>
</template>
<script>
import { cardsUrl, getAuthToken } from '../../config/api'
import { mdiDelete } from '@mdi/js'
export default {
  name: 'Deck',
  props: [ 'cardData' ],
  data() {
    return {
      dialog: false,
      showSnackbar: false,
      deleteIcon: mdiDelete    }
  },
  methods: {
    editCards() {
      this.$router.push(`/cards/${this.cardData._id}`)
    },
    showDeleteDialog() {
      this.dialog = true
    },
    deleteCards() {
      const id = this.cardData._id
      const { token } = this.$store.getters.user
      const reqUrl = `${cardsUrl}/${id}`
      const reqHeaders = {
        headers: {
          ...getAuthToken(token)
        }
      }
      this.$http.delete(
        reqUrl,
        reqHeaders
      ).then(() => {
        this.showSnackbar = true
        this.snackbarText = 'deck deleted'
        const cards = this.$store.getters.cards.filter(card => card._id !== id)
        this.$store.dispatch('SET_CARDS', cards)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
  .card {
    width: 20rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
  }
</style>
