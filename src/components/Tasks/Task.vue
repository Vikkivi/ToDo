<template>
    <q-item
        tag="label"
        v-ripple
        :class="task.done ? 'bg-teal-1' : 'bg-deep-orange-1'"
        @click="updateTask({id: id, updates: {done: !task.done}})"
        >
        <q-item-section side top>
          <q-checkbox :value="task.done" class="no-pointer-events" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{'text-strike': task.done}"
          >
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side center v-if="task.dueTime">
          <q-item-label caption>
            <q-icon
              name="event"
              size="18px"
              class="q-pr-sm"
            />
          </q-item-label>
        </q-item-section>
        <div class="column items-end justify-center">
          <q-item-section side center>
          <q-item-label caption>{{ task.dueDate }}</q-item-label>
          </q-item-section>
          <q-item-section side center>
            <q-item-label caption>
              <small>{{ task.dueTime }}</small>
            </q-item-label>
          </q-item-section>
        </div>

        <q-item-section side>
          <div class="row">
            <q-btn
              flat
              round
              dense
              color="primary"
              icon="edit"
              @click.stop="showEditModal = true"
            />
            <q-btn
              flat
              round
              dense
              color="red-14"
              icon="delete"
              @click.stop="promptToDelete(id)"
            />
          </div>
        </q-item-section>
        <q-dialog v-model="showEditModal">
          <edit-task :taskToChange="task" :id="id" @close="showEditModal= false" />
        </q-dialog>
      </q-item>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
      props: ['task', 'id'],

      data() {
        return {
          showEditModal: false
        }
      },

      methods: {
        ...mapActions('tasks', ['updateTask', 'deleteTask']),

        promptToDelete(id) {
          this.$q.dialog({
            title: 'Подтвердить',
            message: 'Вы действительно хотите удалить?',
            cancel: true,
            persistent: true
          }).onOk(() => {
            this.deleteTask(id);
          })
        }
      },

      components: {
        'edit-task': require('components/Tasks/Modals/EditTask.vue').default,
      }
    }
</script>

<style lang="scss">

</style>
