<template>
  <div class="flex flex-col gap-8 px-6 pt-8 md:mt-44 grow md:px-32">
    <div class="flex flex-col items-center justify-center gap-2">
      <div
        class="text-2xl tracking-tighter uppercase md:text-4xl custom-title-font"
      >
        {{ data.title }}
      </div>
      <div
        class="text-lg tracking-tighter uppercase md:text-2xl custom-title-font"
      >
        {{ data.subtitle }}
      </div>
    </div>

    <div class="flex flex-col gap-4 pb-8">
      <div class="flex flex-col items-start justify-start gap-4 md:flex-row">
        <NuxtImg
          :src="data.content.image"
          width="400"
          alt="Patti di collaborazione"
          class="self-center h-auto"
        />
        <div class="flex flex-col gap-4">
          <h1 class="mt-6 text-2xl tracking-tighter uppercase">
            {{ data.content.title }}
          </h1>
          <div
            v-for="(paragraph, index) in data.content.paragraphs"
            :key="`paragraph-${index}`"
            class="text-base"
            v-html="paragraph"
          />
        </div>
      </div>
      <div
        v-if="data.patti"
        v-for="(patto, i) in data.patti"
        :key="`patto_${i}`"
        class="p-4 border shadow-xl bg-zinc-100 border-zinc-200 rounded-xl"
      >
        <h2
          class="pb-4 text-lg tracking-tighter uppercase md:text-2xl custom-title-font"
        >
          {{ patto.title }}
        </h2>
        <div
          class="flex gap-8"
          :class="
            i % 2 == 0
              ? 'flex-col md:flex-row'
              : 'flex-col-reverse md:flex-row-reverse'
          "
        >
          <div class="text-base">
            <p
              v-for="(c, i) in patto.content"
              :key="`c-${i}`"
              class="py-2"
              v-html="c"
            />
          </div>
          <Carousel
            v-if="patto.images.length > 0"
            :items="patto.images"
            mode="auto"
            class="max-w-2xl"
          />
        </div>
        <!-- {{ patto }} -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import data from "@/utils/patti-di-collaborazione.json";
  import Carousel from "~/components/Carousel.vue";
  import Loader from "~/components/Loader.vue";

  // const loading = ref(true);

  // const preloadImages = (paths) => {
  //   return Promise.all(
  //     paths.map((src) => {
  //       return new Promise((resolve) => {
  //         const img = new Image();
  //         img.src = src;
  //         img.onload = resolve;
  //         img.onerror = resolve; // non bloccare tutto se una fallisce
  //       });
  //     }),
  //   );
  // };

  // onMounted(async () => {
  //   data.dates.forEach(async (date) => {
  //     if (date.photos.every((photo) => photo.startsWith("/events"))) {
  //       return; // Skip if all photos are already absolute URLs
  //     }
  //     date.photos = date.photos.map((photo) => `/events/${date.path}/${photo}`);
  //     await preloadImages(date.photos);
  //   });
  //   loading.value = false;
  // });
</script>
