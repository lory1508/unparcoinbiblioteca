<template>
  <Loader v-if="loading" :speed="5" text="Sto caricando..." />
  <div
    v-else
    class="flex flex-col items-center justify-center gap-8 px-6 pt-8 md:pt-44 md:px-32"
  >
    <div
      class="text-2xl tracking-tighter uppercase md:text-4xl custom-title-font"
    >
      {{ data.title }}
    </div>

    <div
      class="flex flex-wrap items-start justify-center w-full gap-x-4 gap-y-16"
    >
      <div
        v-for="(date, index) in data.dates"
        :key="`when-${index}`"
        class="items-center justify-center max-w-md text-white rounded-xl w-fit"
        :class="{
          'bg-biblioteca-blue': date.color === 'blue',
          'bg-biblioteca-green': date.color === 'green',
          'bg-biblioteca-red': date.color === 'red',
          'bg-biblioteca-yellow': date.color === 'yellow',
          'bg-biblioteca-purple': date.color === 'purple',
        }"
      >
        <Carousel
          v-if="date.photos.length > 0"
          :items="date.photos"
          mode="auto"
          class="max-w-md"
        />
        <div
          class="flex flex-col justify-center w-full gap-4 px-4 py-2 text-center"
        >
          <div class="flex flex-col items-center gap-1 custom-title-font">
            <div class="text-2xl font-black text-center">
              {{ date.type }}
            </div>
            <div
              class="w-full h-[2px] bg-white rounded-full bg-opacity-50 my-1"
            />
            <h1 class="text-xl font-bold">
              {{ date.date }}
            </h1>
          </div>
          <div class="flex flex-col gap-4">
            <div
              v-for="(paragraph, pIndex) in date.description"
              :key="`description-${pIndex}`"
              class="text-base text-justify"
              v-html="paragraph"
            />
          </div>
        </div>
      </div>
    </div>
    <a :href="data.externalLinks.updates.href" target="_blank">
      <div
        class="flex items-center justify-center w-full h-40 text-sm text-center text-white uppercase transition-all duration-300 scale-110 rounded-full size-fit custom-title-font hover:scale-125"
        :style="`background-position: center; background-size: contain; background-repeat: no-repeat; background-image: url(/${data.externalLinks.updates.img});`"
      >
        <div class="w-64">
          {{ data.externalLinks.updates.text }}
        </div>
      </div>
    </a>
    <div class="pb-16 text-xl" v-html="data.note" />
  </div>
</template>

<script setup>
  import data from "@/utils/cosa-e-stato-fatto.json";

  import Carousel from "~/components/Carousel.vue";
  import Loader from "~/components/Loader.vue";

  const loading = ref(true);

  const preloadImages = (paths) => {
    return Promise.all(
      paths.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();

            img.onload = resolve;
            img.onerror = resolve; // Non bloccare tutto se un'immagine fallisce

            img.src = src;
          }),
      ),
    );
  };

  onMounted(async () => {
    try {
      loading.value = true;

      await Promise.all(
        data.dates.map(async (date) => {
          // Se i path non sono ancora completi, li costruiamo
          if (!date.photos.every((photo) => photo.startsWith("/events"))) {
            date.photos = date.photos.map(
              (photo) => `/events/${date.path}/${photo}`,
            );
          }

          // Aspetta che TUTTE le immagini di questa data siano caricate
          await preloadImages(date.photos);
        }),
      );
    } catch (error) {
      console.error("Errore durante il caricamento delle immagini:", error);
    } finally {
      loading.value = false;
    }
  });
</script>
