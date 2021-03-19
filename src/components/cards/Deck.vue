<template>
  <v-card @click="editCards" class="card ma-2 pa-2">
    <v-row class="text-h6" align="center" justify="center">
      {{ cardData.name }}
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'Deck',
  props: [ 'cardData' ],
  data() {
    return {
      front: true
    }
  },
  methods: {
    editCards() {
      this.$router.push(`/cards/${this.cardData._id}`)
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
