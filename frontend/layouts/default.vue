<template>
  <div class="flex flex-col w-full">
    <!-- Header -->
    <div class="flex flex-col " >
    <!-- <div class="sticky top-0 flex flex-col w-full bg-white bg-opacity-50" > -->
      <img :src="`${url}images/Logo_Ascolto_Attivo_nera.png`" alt="Un Parco In Biblioteca - Logo" width="215" height="70" class="my-6 ml-16" />
      <Divider />
    </div>
    <slot />

    <!-- Footer -->
    <div class="bg-[#1d1d1b] flex flex-row gap-16 py-16 pl-32">
      <NuxtImg :src="`${url}images/Logo_Ascolto_Attivo_bianco.png`" alt="Un Parco In Biblioteca - Logo" />
      <div class="flex flex-col text-white">
        <div class="font-black">{{ data.footer.title }}</div>
        <div>{{ data.footer.address }}</div>
        <a :href="`mailto:${data.footer.email}`">{{ data.footer.email }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '@/utils/data.json'

const config = useRuntimeConfig()

const url = config.environment

</script>

<style>

</style>