export default {
  methods: {
    submitForm() {
      const nameInput = this.$refs.modalTaskName.$refs.name;
      nameInput.validate();
      if (!nameInput.hasError) {
        this.submitTask();
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
}
