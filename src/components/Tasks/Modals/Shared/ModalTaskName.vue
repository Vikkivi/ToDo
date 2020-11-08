<template>
  <q-input
    outlined
    :value="name"
    label="Что сделать?"
    :rules="[val => !!val || 'Это поле обязательно для заполнения']"
    ref="name"
    @input="$emit('update:name', $event)"
    class="q-pb-xl"
  >
    <template v-slot:append>
      <q-icon
        name="close"
        v-if="name"
        @click="$emit('update:name', '')"
        class="cursor-pointer"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">

</style>
