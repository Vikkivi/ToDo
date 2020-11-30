<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          ToDo
        </q-toolbar-title>
        <q-btn
          flat
          to="/auth"
          icon-right="account_circle"
          label="Войти"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="link in links"
          :key="link.title"
          :icon="link.icon"
          :to="link.link"
          exact
        />
      </q-tabs>
    </q-footer>


    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      bordered
      content-class="bg-primary"
      dark
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-1"
        >
          Меню
        </q-item-label>
        <EssentialLink
          v-for="link in links"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const links = [
  {
    title: 'Список',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Настройки',
    icon: 'settings',
    link: '/settings'
  },

];

export default {
  name: 'Layout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: true,
      links: links
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
