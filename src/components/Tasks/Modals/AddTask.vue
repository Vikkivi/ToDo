<template>
   <q-card>
      <q-form
        @submit.prevent="submitForm"
      >
      <modal-head>Добавить задачу</modal-head>

      <q-card-section class="q-pt-none">
        <modal-task-name ref="modalTaskName" :name.sync="task.name" />
        <modal-due-date :date.sync="task.dueDate" />
        <modal-due-time v-if="task.dueDate" :time.sync="task.dueTime" />
      </q-card-section>

      <modal-buttons></modal-buttons>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task';

export default {
  data() {
    return {
      task: {
        name: '',
        dueDate: '',
        dueTime: '',
        done: false
      }
    }
  },

  mixins: [mixinAddEditTask],

  methods: {
    ...mapActions('tasks', ['addTask']),
    submitTask() {
      this.addTask(this.task);
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">

</style>
