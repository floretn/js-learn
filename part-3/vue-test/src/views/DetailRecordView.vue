<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link :to="'/history'" class="breadcrumb">История</router-link>
        <a @click.prevent class="breadcrumb">
          {{record.type === 'income' ? 'Доход' : 'Расход'}}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div
            :class="{
              'red': record.type === 'outcome',
              'green': record.type === 'income'
            }"
            class="card"
          >
            <div class="card-content white-text">
              <p>Описание: {{record.description}}</p>
              <p>Сумма: {{currencyFilter(record.amount)}}</p>
              <p>Категория: {{record.categoryName}}</p>
              <small>{{dateFormatter(Date.parse(record.date), 'datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>Запись не найдена:(</p>
  </div>
</template>

<script>
import Loader from "@/components/app/Loader.vue"
import currencyFilter from "../filters/currency.filter"
import dateFormatter from "../filters/date.filter"

export default {
  name: 'detailsRecordView',
  methods: {dateFormatter, currencyFilter},
  components: {Loader},
  data: () => ({
    loading: true,
    record: null
  }),
  async mounted() {
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById', id)
    const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)
    this.record = {
      ...record,
      categoryName: category.title
    }
    console.log(record)
    this.loading = false
  }
}
</script>