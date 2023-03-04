<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
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
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="nameUser"
          :class="{invalid: (v$.nameUser.$dirty && v$.nameUser.required.$invalid) || (v$.nameUser.$dirty && v$.nameUser.minLength.$invalid)}"
        >
        <label for="name">{{localizeFilter('NameUser', getLocale())}}</label>
        <small
          class="helper-text invalid"
          v-if="(v$.nameUser.$dirty && v$.nameUser.required.$invalid)"
        >
          {{localizeFilter('MessageEnterName', getLocale())}}!
        </small>
        <small
          class="helper-text invalid"
          v-else-if="(v$.nameUser.$dirty && v$.nameUser.minLength.$invalid)"
        >
          {{localizeFilter('Min length', getLocale())}}: {{v$.nameUser.minLength.$params.min}}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agreeBox"/>
          <span>{{localizeFilter('RulesAgree', getLocale())}}</span>
        </label>
      </p>
      <small
        class="helper-text invalid"
        v-if="(v$.agreeBox.$dirty && v$.agreeBox.checked.$invalid)"
      >
        {{localizeFilter('NeedAgree', getLocale())}}!
      </small>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          :class="{disabled: !agreeBox}"
        >
          {{localizeFilter('Registration', getLocale())}}
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        {{localizeFilter('AccountExists', getLocale())}}?
        <router-link :to="`/login?locale=${getLocale()}`">{{localizeFilter('Login', getLocale())}}!</router-link>
      </p>

      <div class="switch">
        <label>
          English
          <input type="checkbox" v-model="isRuLocale">
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
import localizeFilter from "@/filters/localize.filter"
import {get} from "firebase/database";

export default {
  name: 'registerView',
  setup () {
    return { v$: useVuelidate() }
  },
  data: () => ({
    email: '',
    password: '',
    nameUser: '',
    agreeBox: false,
    isRuLocale: true
  }),
  validations() {
    return {
      email: {email, required},
      password: {required, minLength: minLength(8)},
      nameUser: {required, minLength: minLength(2)},
      agreeBox: {checked: v => v}
    }
  },
  methods: {
    get,
    localizeFilter,
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      try {
        await this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          nameUser: this.nameUser
        })
        this.$router.push('/')
      } catch (e) {
        // console.error(e)
      }
    },
    getLocale() {
      return this.isRuLocale ? 'ru-RU' : 'en-US'
    }
  }
}
</script>