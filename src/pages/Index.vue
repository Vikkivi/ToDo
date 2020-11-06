<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
      v-if="Object.keys(tasks).length !== 0"
    >
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
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
      ...mapGetters('tasks', ['tasks'])
    },
    components: {
      'task': require('components/Tasks/Task.vue').default,
      'add-task': require('components/Tasks/Modals/AddTask.vue').default,
    }
  }
</script>

 <style>

 </style>
