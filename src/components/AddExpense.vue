<template>
  <div class="add-expense">
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>Name & describe your expense</legend>

        <BaseSelect
          :options="categories"
          v-model="expense.category"
          label="Category"
        /><br>

        <BaseInput
          v-model="expense.amount"
          label="Amount"
          type="number"
        /><br>

        <BaseInput
          v-model="expense.comment"
          label="Comment"
          type="text"
        />
      </fieldset>

      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Expense',
  emits: ['add-expense'],
  props: {
    categories: Array
  },
  data () {
    return {
      expense: {
        category: this.categories[0],
        amount: 100,
        comment: ''
      }
    }
  },
  methods: {
    submitForm () {
      this.$emit('add-expense', this.expense)
    }
  }
}
</script>

<style scoped>
.add-expense {

}
</style>
