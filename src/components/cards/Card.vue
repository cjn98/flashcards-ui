<template>
  <div>single card</div>
</template>
<script>
export default {
  name: 'Card',
  props: [ 'cardData' ],
  data() {
    return {
      front: true
    }
  },
  methods: {
    editCards() {
      console.log(this.cardData)
      this.$router.push(`/cards/${this.cardData._id}`)
    }
  }
}
</script>
<style scoped>
</style>
