<template>
  <q-page padding>
    <q-card class="login__wrapper">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Вход" />
          <q-tab name="register" label="Регистрация" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
             <login-register :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="register">
            <login-register :tab="tab" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tab: 'register'
      }
    },
    components: {
      'login-register': require('components/Auth/LoginRegister.vue').default,
    }
  }
</script>

<style lang="scss">
  .login__wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
