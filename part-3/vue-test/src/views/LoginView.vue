<template>
  <form class="card auth-card" @submit.prevent="submitHandler" :key="isRuLocale">
    <div class="card-content">
      <span class="card-title">{{localizeFilter('Home accounting', getLocale())}}</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: (v$.email.$dirty && v$.email.required.$invalid) || (v$.email.$dirty && v$.email.email.$invalid)}"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="(v$.email.$dirty && v$.email.required.$invalid)"
        >
          {{localizeFilter('Enter', getLocale())}} Email!
        </small>
        <small
          class="helper-text invalid"
          v-else-if="(v$.email.$dirty && v$.email.email.$invalid)"
        >
          {{localizeFilter('Enter correct', getLocale())}} Email!
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{invalid: (v$.password.$dirty && v$.password.required.$invalid) || (v$.password.$dirty && v$.password.minLength.$invalid)}"
        >
        <label for="password">{{localizeFilter('Password', getLocale())}}</label>
        <small
          class="helper-text invalid"
          v-if="(v$.password.$dirty && v$.password.required.$invalid)"
        >
          {{localizeFilter('Enter password', getLocale())}}
        </small>
        <small
          class="helper-text invalid"
          v-else-if="(v$.password.$dirty && v$.password.minLength.$invalid)"
        >
          {{localizeFilter('Min length', getLocale())}}: {{v$.password.minLength.$params.min}}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          {{localizeFilter('Login', getLocale())}}
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        {{localizeFilter('No account', getLocale())}}?
        <router-link :to="`/register?locale=${getLocale()}`">{{localizeFilter('Registration', getLocale())}}</router-link>
      </p>


      <div class="switch">
        <label>
          English
          <input type="checkbox" v-model="isRuLocale" v-on:click="updateTextFields">
          <span class="lever"></span>
          Русский
        </label>
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import messages from "@/utils/messages"
import localizeFilter from "@/filters/localize.filter"

export default {
  name: 'loginView',
  setup () {
    return { v$: useVuelidate() }
  },
  data: () => ({
    email: '',
    password: '',
    isRuLocale: true
  }),
  validations() {
    return {
      email: {email, required},
      password: {required, minLength: minLength(6)}
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
    const locale = this.$route.query.locale
    console.log(locale)
    //Такая сложная проверка потому, что может прийти непонятно что...
    this.isRuLocale = locale !== undefined ? locale !== 'en-US' : true
  },
  methods: {
    localizeFilter,
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (e) {
        // console.error(e)
      }
    },
    updateTextFields() {
      //Если не сделать так с паролем и мэйлом, то текстовые поля не апдейтаются почему-то....
      //На странице регистрации всё норм
      const email = this.email
      const password = this.password
      this.email = email
      this.password = password
      // eslint-disable-next-line no-undef
      setTimeout(() => M.updateTextFields(), 0)
    },
    getLocale() {
      return this.isRuLocale ? 'ru-RU' : 'en-US'
    }
  }
}
</script>