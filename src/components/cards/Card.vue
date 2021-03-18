<template>
  <v-card class="card ma-2 pa-2">
    <v-col>
      <v-row align="center" justify="center">
        {{cardData.name}}
      </v-row>
    </v-col>
  </v-card>
</template>
<script>
export default {
  name: 'Card',
  props: [ 'cardData' ],
  data() {
    return {
      front: true
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
