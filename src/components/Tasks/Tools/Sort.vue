<template>
  <q-select
    filled
    v-model="sortBy"
    :options="options"
    label="Сортировать по"
    emit-value
    map-options
  />
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      options: [
        {
          label: 'Алфавиту',
          value: 'name'
        },
        {
          label: 'Дате',
          value: 'dueDate'
        }
      ]
    }
  },

  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      }
    }
  },

  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style lang="scss" scoped>
  .q-select {
    width: 200px;
    margin-left: 10px;
  }
</style>
