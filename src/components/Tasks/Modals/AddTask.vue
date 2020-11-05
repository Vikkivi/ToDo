<template>
   <q-card>
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
        class="q-pb-sm"
      />

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
      <q-btn flat label="Сохранить" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      task: {
        name: '',
        dueDate: '',
        dueTime: ''
      }
    }
  }
}
</script>

<style lang="scss">

</style>
