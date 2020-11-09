<template>
  <q-list
    bordered
    separator
    v-if="Object.keys(tasksDone).length !== 0"
  >
    <task
      v-for="(task, key) in tasksDone"
      :key="key"
      :task="task"
      :id="key"
    ></task>
  </q-list>
</template>

<script>
export default {
  props: ['tasksDone'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
  }
}
</script>

<style>

</style>
