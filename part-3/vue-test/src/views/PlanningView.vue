<template>
  <div>
    <div class="page-title">
      <h3>Планирование</h3>
      <h4>{{getMoney(info.bill)}}</h4>
    </div>

    <Loader v-if="loading"/>

    <p class="center" v-else-if="!categories.length">
      Категорий пока нет. <router-link to="/categories">Добавить новую категорию</router-link>
    </p>

    <section v-else>
      <div v-for="category in categories" :key="category.id">
        <p style="font-size: 16px">
          <strong>{{category.title}}:</strong>
          {{getMoney(category.spend)}} из {{getMoney(category.limit)}}
        </p>
        <div class="progress" v-tooltip="category.tooltip">
          <div
            class="determinate"
            :class="[category.progressColor]"
            :style="{width: category.progressPercent + '%'}"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Loader from "@/components/app/Loader.vue";
import {mapGetters} from "vuex"
import currencyFilter from "@/filters/currency.filter"

export default {
  name: 'planingView',
  components: {Loader},
  data: () => ({
    loading: true,
    categories: []
  }),
  computed: {
    ...mapGetters(['info'])
  },
  async mounted() {
    const records = await this.$store.dispatch('fetchRecords')
    const categories = await this.$store.dispatch('fetchCategories')
    this.categories = categories.map(category => {
      const spend = records
        .filter(record => record.categoryId === category.id && record.type === 'outcome')
        .reduce((total, record) => total + +record.amount, 0)
      const percent = 100 * spend / category.limit
      const progressPercent = percent > 100 ? 100 : percent
      console.log(progressPercent)
      const progressColor = percent < 60
        ? 'green'
        : percent < 100
          ? 'yellow'
          : 'red'
      const tooltipValue = category.limit - spend
      const tooltip = `${tooltipValue < 0 ? 'Превышение на' : 'Осталось'} ${this.getMoney(Math.abs(tooltipValue))}`
      return {
        ...category,
        progressPercent,
        progressColor,
        spend,
        tooltip
      }
    })
    this.loading = false
  },
  methods: {
    getMoney(moneyNumber) {
      return currencyFilter(moneyNumber)
    }
  }
}
</script>