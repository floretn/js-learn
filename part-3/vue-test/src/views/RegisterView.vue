<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
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
          Поле Email не должно быть пустым!
        </small>
        <small
          class="helper-text invalid"
          v-else-if="(v$.email.$dirty && v$.email.email.$invalid)"
        >
          Введите корректный Email!
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{invalid: (v$.password.$dirty && v$.password.required.$invalid) || (v$.password.$dirty && v$.password.minLength.$invalid)}"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="(v$.password.$dirty && v$.password.required.$invalid)"
        >
          Введите пароль!
        </small>
        <small
          class="helper-text invalid"
          v-else-if="(v$.password.$dirty && v$.password.minLength.$invalid)"
        >
          Пароль длинной {{password.length}} слишком короткий! Минимальная длинна пароля: {{v$.password.minLength.$params.min}}
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="nameUser"
          :class="{invalid: (v$.nameUser.$dirty && v$.nameUser.required.$invalid) || (v$.nameUser.$dirty && v$.nameUser.minLength.$invalid)}"
        >
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="(v$.nameUser.$dirty && v$.nameUser.required.$invalid)"
        >
          Введите имя!
        </small>
        <small
          class="helper-text invalid"
          v-else-if="(v$.nameUser.$dirty && v$.nameUser.minLength.$invalid)"
        >
          Имя длинной {{nameUser.length}} слишком короткое! Минимальная длинна имени: {{v$.nameUser.minLength.$params.min}}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agreeBox"/>
          <span>С правилами согласен</span>
        </label>
      </p>
      <small
        class="helper-text invalid"
        v-if="(v$.agreeBox.$dirty && v$.agreeBox.checked.$invalid)"
      >
        Необходимо согласиться с правилами!
      </small>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          :class="{disabled: !agreeBox}"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Уже есть аккаунт?
        <router-link :to="'/login'">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default {
  name: 'registerView',
  setup () {
    return { v$: useVuelidate() }
  },
  data: () => ({
    email: '',
    password: '',
    nameUser: '',
    agreeBox: false
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
    }
  }
}
</script>