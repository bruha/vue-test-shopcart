<template>
  <div id="app">
    <h3>Balance: ${{balance}}</h3>
    <AddExpense :categories="categories" @add-expense="addExpense($event)" />
    <h3>Expenses</h3>
    <div v-if="!expenses.length">No expenses yet</div>
    <ul class="expenses-list">
      <li v-for="expense in expenses" :key="$index">
        <Expense :category="expense.category" :amount="expense.amount" :comment="expense.comment" />
      </li>
    </ul>
  </div>
</template>

<script>
import AddExpense from './components/AddExpense.vue'
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
    AddExpense,
    Expense
  },
  data() {
    return {
      balance: 1000,
      categories: Object.values(CATEGORY),
      expenses: []
    }
  },
  methods: {
    addExpense({category, amount, comment} = {}) {
      if (this.balance - amount > 0) {
        this.expenses.push({category, amount, comment})
        this.balance -= amount
      } else {
        // todo: show a warning about low balance
      }
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
