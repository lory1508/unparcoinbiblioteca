<template>
  <div
    class="flex flex-col w-full min-h-screen"
    :class="
      route?.name === 'patti-di-collaborazione' ?
        'bg-[#FBF5E9]'
      : 'bg-gradient-to-br from-sky-50 to-sky-100'
    "
  >
    <!-- Mobile menu -->
    <div
      class="fixed bottom-0 z-50 self-center block w-10/12 transition-all duration-500 md:hidden"
      :class="showMenu ? '-translate-y-0' : 'translate-y-48'"
    >
      <div class="flex justify-end w-full px-4">
        <div
          class="flex flex-col items-center justify-center cursor-pointer w-fit md:hidden"
          @click="toggleMenu"
        >
          <Icon
            icon="teenyicons:bookmark-solid"
            height="72"
            class="rotate-180 opacity-50 text-zinc-200"
          />
          <span class="z-40 -mt-10 text-zinc-200">menu</span>
        </div>
      </div>
      <div class="flex-col w-full h-fit md:hidden">
        <div class="flex items-center justify-center w-full">
          <div
            class="flex flex-col w-full gap-4 px-4 py-6 pt-6 bg-opacity-50 border-t-2 rounded-t-xl bg-zinc-200 border-zinc-400 backdrop-blur-sm"
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
    </div>
    <!-- End mobile menu -->

    <!-- Header -->
    <div
      class="z-40 flex-col items-center hidden w-screen transition-all duration-300 shadow-lg md:flex md:fixed md:top-0 bg-zinc-600 backdrop-blur-sm bg-opacity-30 md:items-start"
      :class="scrolled ? 'h-20' : 'h-36'"
    >
      <div
        class="flex flex-col items-center justify-between w-full h-full px-6 lg:flex-row"
      >
        <NuxtLink to="/">
          <img
            src="/images/Logo_Ascolto_Attivo_nera.png"
            alt="Un Parco In Biblioteca - Logo"
            width="280"
            height="90"
            class="md:ml-16"
          />
        </NuxtLink>
        <div
          class="flex flex-col items-center justify-center h-full gap-4 lg:flex-row"
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

  const url = "http://" + useRequestURL().host;
  const route = useRoute();
  const showMenu = ref(false);
  const scrolled = ref(false);

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
    scrolled.value = window.scrollY > 0;
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
