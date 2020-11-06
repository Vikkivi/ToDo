<template>
   <q-card>
      <q-form
        @submit.prevent="submitForm"
      >
      <q-card-section class="row items-center">
        <div class="text-h6">Добавить задачу</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          outlined
          v-model="task.name"
          label="Что сделать?"
          :rules="[val => !!val || 'Это поле обязательно для заполнения']"
          ref="name"
          class="q-pb-xl"
        >
          <template v-slot:append>
            <q-icon name="close" @click="task.name = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <q-input
          outlined
          v-model="task.dueDate"
          label="Когда?"
          class="q-pb-sm"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                <q-date v-model="task.dueDate" first-day-of-week="1">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Готово" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          outlined
          v-if="task.dueDate"
          v-model="task.dueTime"
          label="Во сколько?"
          class="q-pb-sm"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time
                  v-model="task.dueTime"
                  format24h
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Готово" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Сохранить" color="primary" type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';

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

  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },

    submitTask() {
      this.addTask(this.task);
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">

</style>
