<template>
  <q-input
    outlined
    :value="time"
    label="Во сколько?"
    class="q-pb-sm"
    @input="$emit('update:time', $event)"
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            :value="time"
            format24h
            @input="$emit('update:time', $event)"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Готово" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['time']
}
</script>

<style lang="scss">

</style>
