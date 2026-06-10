<template>
  <div class="flex flex-col w-full bg-gradient-to-br from-sky-50 to-sky-100">
    <!-- Header -->
    <div class="flex flex-col items-center md:items-start">
      <!-- <div class="sticky top-0 flex flex-col w-full bg-white bg-opacity-50" > -->
      <div
        class="flex flex-row items-center justify-between w-full h-full px-6"
      >
        <img
          :src="`${url}images/Logo_Ascolto_Attivo_nera.png`"
          alt="Un Parco In Biblioteca - Logo"
          width="280"
          height="90"
          class="md:ml-16"
        />
        <div>
          <NuxtLink
            to="/"
            class="px-4 py-2 text-sm text-white rounded-full bg-biblioteca-blue custom-title-font"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/cosa-e-stato-fatto"
            class="px-4 py-2 ml-4 text-sm text-white rounded-full bg-biblioteca-purple custom-title-font"
          >
            Cosa è stato fatto
          </NuxtLink>
        </div>
      </div>
      <Divider />
    </div>
    <slot />

    <!-- Footer -->
    <div class="bg-[#0e0e0e] w-full justify-center items-center flex">
      <div
        class="flex flex-col items-center justify-between gap-16 py-8 lg:flex-row lg:gap-16 w-fit lg:px-32"
      >
        <div class="flex flex-col items-center text-white lg:flex-row">
          <img
            :src="data.footer.logo"
            alt="Un Parco In Biblioteca - Logo"
            width="280"
          />
          <div class="flex flex-col text-white">
            <div class="font-black">{{ data.footer.title }}</div>
            <div>{{ data.footer.address }}</div>
            <a :href="`${data.footer.rivoli.href}`" target="_blank">{{
              data.footer.rivoli.title
            }}</a>
            <a :href="`mailto:${data.footer.email}`">{{ data.footer.email }}</a>
          </div>
        </div>

        <div class="flex flex-col gap-8 lg:flex-row">
          <a :href="data.footer.rivoli.href" target="_blank">
            <img
              :src="data.footer.rivoli.logo"
              :alt="data.footer.rivoli.alt"
              width="180"
            />
          </a>
          <a :href="data.footer.biblioteca.href" target="_blank">
            <img
              :src="data.footer.biblioteca.logo"
              :alt="data.footer.biblioteca.alt"
              width="100"
            />
          </a>
          <a :href="data.footer.ascoltoAttivo.href" target="_blank">
            <img
              :src="data.footer.ascoltoAttivo.logo"
              :alt="data.footer.ascoltoAttivo.alt"
              width="100"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import data from "@/utils/data.json";

  const config = useRuntimeConfig();

  const url = config.public.environment;
</script>

<style></style>
