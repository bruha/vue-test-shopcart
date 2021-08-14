<template>
  <div class="expense">
    {{category}}: ${{ amount }} <span v-if="comment">({{comment}})</span>
  </div>
</template>

<script>
export default {
  name: 'Expense',
  props: {
    amount: String,
    category: String,
    comment: String
  }
}
</script>

<style scoped>
.expense {

}
</style>
