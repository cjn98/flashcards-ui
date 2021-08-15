<template>
  <div>
    <card-editor v-if="editMode" :cardData="cardData"/>
    <card-viewer v-else :cardData="cardData"/>
  </div>
</template>

<script>
import CardEditor from './CardEditor.vue'
import CardViewer from './CardViewer.vue'
export default {
  name: 'CardsManager',
  components: {
    CardEditor,
    CardViewer
  },
  data() {
    return {
      cardData: {
        name: '',
        description: '',
        cardList: []
      },
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.cardData = this.$store.getters.cards.find(cards => cards._id === this.$route.params.id)
    }
  },
  computed: {
    editMode() {
      return this.$store.getters.editMode
    }
  }
}
</script>

<style scoped>
</style>
