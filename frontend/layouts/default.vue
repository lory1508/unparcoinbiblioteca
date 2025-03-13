<template>
  <div class="flex flex-col w-full">
    <!-- Header -->
    <div class="flex flex-col " >
    <!-- <div class="sticky top-0 flex flex-col w-full bg-white bg-opacity-50" > -->
      <img :src="`${url}images/Logo_Ascolto_Attivo_nera.png`" alt="Un Parco In Biblioteca - Logo" width="215" height="70" class="my-6 ml-16" />
      <Divider />
    </div>
    <slot />
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const url = config.environment

</script>

<style>

</style>