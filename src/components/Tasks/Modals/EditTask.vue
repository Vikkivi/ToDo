<template>
   <q-card>
      <q-form
        @submit.prevent="submitForm"
      >
      <modal-head>Изменить задачу</modal-head>

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
  props: ['taskToChange', 'id'],

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
    ...mapActions('tasks', ['updateTask']),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.task
      });
      this.$emit('close');
    }
  },

  mounted() {
    this.task = Object.assign({}, this.taskToChange);
  }
}
</script>

<style lang="scss">

</style>
