<template>
  <q-list
    bordered
    separator
    v-if="Object.keys(tasksToDo).length !== 0"
  >
    <task
      v-for="(task, key) in tasksToDo"
      :key="key"
      :task="task"
      :id="key"
    ></task>
  </q-list>
</template>

<script>
export default {
  props: ['tasksToDo'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
  }
}
</script>

<style>

</style>
