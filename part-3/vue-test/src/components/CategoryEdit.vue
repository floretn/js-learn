<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{localizeFilter('Edit')}}</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field" >
          <select ref="categorySelect" v-model="currentCategory">
            <option
              v-for="c of categories"
              :key="c.id"
              :value="c.id"
            >
              {{c.title}}
            </option>
          </select>
          <label>{{localizeFilter('ChooseCategory')}}</label>
        </div>

        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{invalid: v$.title.$dirty && v$.title.required.$invalid}"
          >
          <label for="name">{{localizeFilter('Name')}}</label>
          <span
            v-if="v$.title.$dirty && v$.title.required.$invalid"
            class="helper-text invalid"
          >
            {{localizeFilter('EnterCategoryName')}}!
          </span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{invalid: v$.limit.$dirty && v$.limit.required.$invalid || v$.limit.$dirty && v$.limit.minValue.$invalid}"
          >
          <label for="limit">{{localizeFilter('Limit')}}</label>
          <span
            v-if="v$.limit.$dirty && v$.limit.required.$invalid"
            class="helper-text invalid"
          >
            {{localizeFilter('EnterLimit')}}!
          </span>
          <span
            v-else-if="v$.limit.$dirty && v$.limit.minValue.$invalid"
            class="helper-text invalid"
          >
            {{localizeFilter('MinValue')}}: {{v$.limit.minValue.$params.min}}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          {{localizeFilter('Update')}}
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import {minValue, required} from "@vuelidate/validators"
import localizeFilter from "@/filters/localize.filter"

export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data: () => ({
    select: null,
    title: '',
    limit: 100,
    currentCategory: null
  }),
  validations() {
    return {
      title: {required},
      limit: {required, minValue: minValue(100)}
    }
  },
  watch: {
    currentCategory(categoryId) {
      const {title, limit} = this.categories.find(c => c.id === categoryId)
      this.title = title
      this.limit = limit
    }
  },
  created() {
    const {id, title, limit} = this.categories[0]
    this.currentCategory = id
    this.title = title
    this.limit = limit
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.select = M.FormSelect.init(this.$refs.categorySelect, {}, {})
    // eslint-disable-next-line no-undef
    M.updateTextFields()
  },
  beforeUnmount() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  },
  methods: {
    localizeFilter,
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      try {
        const categoryData = {
          id: this.currentCategory,
          title: this.title,
          limit: this.limit
        }
        await this.$store.dispatch('updateCategory', categoryData)
        this.$message(`${localizeFilter('Category')} ${categoryData.title} ${localizeFilter('SuccessEdited')}!`)
        this.$emit('updated', categoryData)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>