<template>
  <div id="app">
    <h3>Balance: ${{balance}}</h3>
    <h3>Expenses:</h3>
    <ul class="expenses-list">
      <li v-for="expense in expenses" :key="$index">
        <Expense :category="expense.category" :amount="expense.amount" :comment="expense.comment" />
      </li>
    </ul>
  </div>
</template>

<script>
import Expense from './components/Expense.vue'
const CATEGORY = {
  HOUSING: 'Housing',
  FOOD: 'Food',
  INSURANCE: 'Insurance',
  TRANSPORTATION: 'Transportation',
  TAXES: 'Taxes'
}

export default {
  name: 'App',
  components: {
    Expense
  },
  data() {
    return {
      balance: 1000,
      expenses: [{
        category: CATEGORY.HOUSING,
        amount: 200,
        comment: 'Electricity'
      }, {
        category: CATEGORY.FOOD,
        amount: 30,
        comment: 'Banana'
      }, {
        category: CATEGORY.TAXES,
        amount: 100
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 0;
}
.expenses-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
