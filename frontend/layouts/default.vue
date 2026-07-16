<template>
  <div
    class="flex flex-col w-full min-h-screen"
    :class="
      route?.name === 'patti-di-collaborazione'
        ? 'bg-[#FBF5E9]'
        : 'bg-gradient-to-br from-sky-50 to-sky-100'
    "
  >
    <div
      class="fixed z-50 block border-2 rounded-md cursor-pointer bg-zinc-800 bg-opacity-20 backdrop-blur-sm top-5 left-5 border-zinc-400 md:hidden"
      @click="toggleMenu"
    >
      <Icon icon="teenyicons:menu-solid" width="40" class="p-1 text-zinc-400" />
    </div>

    <div
      class="fixed z-40 flex-col w-full transition-all duration-500 h-fit md:hidden"
      :class="showMenu ? 'bottom-0' : '-bottom-full'"
    >
      <div class="flex items-center justify-center w-full">
        <div
          class="flex flex-col w-full gap-4 px-4 py-6 pt-6 bg-opacity-50 border-t-2 bg-zinc-200 border-zinc-300 backdrop-blur-sm"
        >
          <NuxtLink
            to="/"
            class="w-full px-4 py-2 text-sm text-center text-white rounded-full bg-biblioteca-blue custom-title-font lg:w-fit"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/cosa-e-stato-fatto"
            class="w-full px-4 py-2 text-sm text-center text-white rounded-full bg-biblioteca-purple custom-title-font lg:w-fit"
          >
            Cosa è stato fatto
          </NuxtLink>
          <NuxtLink
            to="/patti-di-collaborazione"
            class="w-full px-4 py-2 text-sm text-center text-white rounded-full bg-biblioteca-green custom-title-font lg:w-fit"
          >
            Patti di collaborazione
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Header -->
    <div
      class="z-40 flex-col items-center hidden w-screen transition-all duration-300 shadow-lg md:flex md:fixed md:top-0 bg-zinc-600 backdrop-blur-sm bg-opacity-30 md:items-start"
    >
      <div
        class="flex flex-col items-center justify-between w-full h-full px-6 lg:flex-row"
      >
        <NuxtLink to="/">
          <img
            :src="`${url}images/Logo_Ascolto_Attivo_nera.png`"
            alt="Un Parco In Biblioteca - Logo"
            width="280"
            height="90"
            class="md:ml-16"
          />
        </NuxtLink>
        <div class="flex flex-col gap-4 pt-6 lg:flex-row">
          <NuxtLink
            to="/"
            class="w-full px-4 py-2 text-sm text-center text-white rounded-full bg-biblioteca-blue custom-title-font lg:w-fit"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/cosa-e-stato-fatto"
            class="w-full px-4 py-2 text-sm text-center text-white rounded-full bg-biblioteca-purple custom-title-font lg:w-fit"
          >
            Cosa è stato fatto
          </NuxtLink>
          <NuxtLink
            to="/patti-di-collaborazione"
            class="w-full px-4 py-2 text-sm text-center text-white rounded-full bg-biblioteca-green custom-title-font lg:w-fit"
          >
            Patti di collaborazione
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
          <a
            v-if="route?.name === 'cosa-e-stato-fatto'"
            :href="data.footer.ascoltoAttivo.href"
            target="_blank"
          >
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
  import { Icon } from "@iconify/vue";

  const config = useRuntimeConfig();

  const url = config.public.environment;
  const route = useRoute();
  const showMenu = ref(false);

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  watch(
    () => route.name,
    () => {
      showMenu.value = false;
    },
  );

  const handleScroll = () => {
    if (showMenu.value) {
      showMenu.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<style></style>
