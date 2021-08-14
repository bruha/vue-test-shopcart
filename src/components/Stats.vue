<template>
  <div class="stats">
    <ul>
      <li v-for="stat in stats">
        {{stat.value}}% {{stat.key}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Expense',
  props: {
    expenses: Array
  },
  data () {
    return {
      stats: undefined
    }
  },
  mounted() {
    this.$watch(() => this.$props.expenses, (expenses) => {
      const categories = {}
      expenses.forEach(exp => {
        categories[exp.category] = categories[exp.category] ?
          categories[exp.category] + exp.amount :
          +exp.amount
      })
      const sum = Object.values(categories).reduce((sum, a) => sum+=a, 0)
      const stats = Object.entries(categories).map(([key, value]) => {
        return {
          key,
          value: (100 * (value / sum)).toFixed(2)
        }
      })
      this.stats = stats
    }, {
      immediate: true,
      deep: true
    })
  }
}
</script>

<style scoped>
.expense {

}
</style>
