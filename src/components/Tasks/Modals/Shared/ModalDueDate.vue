<template>
  <q-input
    outlined
    :value="date"
    label="Когда?"
    class="q-pb-sm"
    @input="$emit('update:date', $event)"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date :value="date" first-day-of-week="1" @input="$emit('update:date', $event)">
            <div class="row items-center justify-end">
              <q-btn
                v-close-popup
                label="Готово"
                color="primary"
                flat
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['date']
}
</script>

<style lang="scss">

</style>
