<template>
  <div>
    <card-editor v-if="edit" :cardData="cardData" @editMode="editModeHandler"/>
    <card-viewer v-else :cardData="cardData" @editMode="editModeHandler"/>
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
      edit: false,
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
    editModeHandler(isEditMode) {
      this.edit = isEditMode
    }
  }
}
</script>

<style scoped>
</style>
