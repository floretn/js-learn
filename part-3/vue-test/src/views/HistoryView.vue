<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <Loader v-if="loading"/>

    <p class="center" v-else-if="!records.length">
      Записей пока нет.
      <router-link to="/record">Добавить новую запись...</router-link>
    </p>

    <section v-else>
      <DoughnutChart v-bind="doughnutChartProps" />
      <HistoryTable :records="items"/>
      <div>
        <Paginate
          v-model="page"
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          :prev-text="'Назад'"
          :next-text="'Вперёд'"
          :container-class="'pagination'"
          :page-class="'waves-effect'"
        ></Paginate>
      </div>
    </section>
  </div>
</template>

<script>
import HistoryTable from "@/components/HistoryTable.vue"
import paginationMixin from "@/mixins/pagination.mixin"
import {DoughnutChart, useDoughnutChart} from "vue-chart-3"
import {Chart, registerables} from "chart.js"

Chart.register(...registerables);

export default {
  name: 'historyView',
  mixins: [paginationMixin],
  data: () => ({
    loading: true,
    records: [],
    doughnutChartRef: {},
    doughnutChartProps: {}
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    this.setup(await this.$store.dispatch('fetchCategories'))
    this.loading = false
  },
  methods: {
    setup(categories) {
      this.setupPagination(this.records.map(record => {
        return {
          ...record,
          categoryName: categories.find(c => c.id === record.categoryId).title,
          typeClass: record.type === 'income' ? 'green' : 'red',
          typeText: record.type === 'income' ? 'Доход' : 'Расход'
        }
      }))

      const dataLabels = categories.map(c => c.title)
      const dataValues = categories.map(c => this.records
        .filter(r => r.categoryId === c.id && r.type === 'outcome')
        .reduce((t, r) => t + +r.amount, 0)
      )
      const {doughnutChartProps, doughnutChartRef} = useDoughnutChart({
        chartData: {
          labels: dataLabels,
          datasets: [
            {
              label: 'Расходы по категориям',
              data: dataValues,
              borderWidth: 1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(74, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(74, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ]
            }
          ]
        }
      })
      this.doughnutChartRef = doughnutChartRef
      this.doughnutChartProps = doughnutChartProps
    }
  },
  components: { HistoryTable, DoughnutChart },
}
</script>