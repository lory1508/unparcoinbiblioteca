<template>
  <div class="flex flex-col w-full">
    <!-- Header -->
    <div class="flex flex-col items-center md:items-start" >
    <!-- <div class="sticky top-0 flex flex-col w-full bg-white bg-opacity-50" > -->
      <img :src="`${url}images/Logo_Ascolto_Attivo_nera.png`" alt="Un Parco In Biblioteca - Logo" width="280" height="90" class="md:ml-16" />
      <Divider />
    </div>
    <slot />

    <!-- Footer -->
    <div class="bg-[#1d1d1b] w-full justify-center items-center flex">
      <div class="flex flex-col items-center justify-between gap-16 py-8 lg:flex-row lg:gap-16 w-fit lg:px-32">
        <div class="flex flex-col items-center text-white lg:flex-row">
          <img :src="data.footer.logo" alt="Un Parco In Biblioteca - Logo" width="280" />
          <div class="flex flex-col text-white">
            <div class="font-black">{{ data.footer.title }}</div>
            <div>{{ data.footer.address }}</div>
            <a :href="`mailto:${data.footer.email}`">{{ data.footer.email }}</a>
          </div>
        </div>

        <a :href="data.footer.rivoli.href" target="_blank">
          <img :src="data.footer.rivoli.logo" alt="Logo Città di Rivoli" width="180">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from '@/utils/data.json'

const config = useRuntimeConfig()

const url = config.public.environment

</script>

<style>

</style>