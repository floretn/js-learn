<template>
  <div class="input-field">
    <input
      id="name"
      type="text"
      v-model="title"
      :class="{invalid: v$.title.$dirty && v$.title.required.$invalid}"
    >
    <label for="name">Название</label>
    <span
      v-if="v$.title.$dirty && v$.title.required.$invalid"
      class="helper-text invalid"
    >
            Введите название категории!
          </span>
  </div>

  <div class="input-field">
    <input
      id="limit"
      type="number"
      v-model.number="limit"
      :class="{invalid: v$.limit.$dirty && v$.limit.minValue.$invalid}"
    >
    <label for="limit">Лимит</label>
    <span
      v-if="v$.limit.$dirty && v$.limit.minValue.$invalid"
      class="helper-text invalid"
    >
            Минимальное значение: {{v$.limit.minValue.$params.min}}
          </span>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {minValue, required} from "@vuelidate/validators";

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data: () => ({
    title: '',
    limit: 100
  }),
  validations() {
    return {
      title: {required},
      limit: {minValue: minValue(100)}
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    M.updateTextFields()
  },
  methods: {
    isValid() {
      console.log(this.v$)
      if (this.v$.$invalid) {
        this.v$.$touch()
        return false
      }
      return true
    },
    reset() {
      this.v$.reset()
    }
  }
}
</script>