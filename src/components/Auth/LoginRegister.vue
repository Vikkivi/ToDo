<template>
  <div>
    <q-banner v-if="tab === 'register'" class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="account_circle" color="primary" />
      </template>
      Зарегистрируйтесь, чтобы не потерять ваши задачи
    </q-banner>

    <q-form
      @submit="onSubmit"
      greedy
      class="q-gutter-md q-mt-md"
    >
      <q-input
        v-model="formData.email"
        label="Email"
        outlined
        :rules="[ val => validateEmail(val) || 'Введен некорректный email']"
        lazy-rules
      />
      <q-input
        v-model="formData.password"
        label="Пароль"
        outlined
        :type="!showPassword ? 'password' : 'text'"
        :rules="[ val => val.length >= 6 || 'Пароль должен содержать не менее 6 символов']"
        lazy-rules
      >
        <template v-slot:append>
          <q-icon
            :name="showPassword ? 'visibility' : 'visibility_off'"
            class="cursor-pointer"
            @click="showPassword = !showPassword"
          />
        </template>
      </q-input>

      <div>
        <q-btn
          :label="tab === 'login' ? 'Войти' : 'Сохранить'"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      showPassword: false
    }
  },
  methods: {
    ...mapActions( 'auth', ['registerUser', 'loginUser']),
    onSubmit() {
      if(this.tab === 'login') {
        this.loginUser(this.formData);
      } else {
        this.registerUser(this.formData);
      }
    },

    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>

<style lang="scss">

</style>
