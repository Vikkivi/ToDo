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

  components: {
    'modal-head': require('components/Tasks/Modals/Shared/ModalHead.vue').default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default,
  },

  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      const nameInput = this.$refs.modalTaskName.$refs.name;
      nameInput.validate();
      if (!nameInput.hasError) {
        this.submitTask();
      }
    },

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
