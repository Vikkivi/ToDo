<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg">
      <search />
    </div>

    <p v-if="!Object.keys(tasksToDo).length && !Object.keys(tasksDone).length">Задачи не найдены</p>
    <tasks-todo :tasksToDo="tasksToDo" />
    <hr>
    <tasks-done :tasksDone="tasksDone" />
    <div class="fixed-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="30px"
        icon="add"
        @click="showAddModal = true"
      />
    </div>
    <q-dialog v-model="showAddModal">
      <add-task @close="showAddModal = false" />
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        showAddModal: false
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasksToDo', 'tasksDone'])
    },
    components: {
      'add-task': require('components/Tasks/Modals/AddTask.vue').default,
      'tasks-todo': require('components/Tasks/TasksToDo.vue').default,
      'tasks-done': require('components/Tasks/TasksDone.vue').default,
      'search': require('components/Tasks/Tools/Search.vue').default,
    }
  }
</script>

 <style>

 </style>
