<template>
  <div class="flex flex-col gap-8 px-6 mt-16 md:mt-44 grow md:px-32">
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

    <div class="flex flex-col gap-4">
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
    </div>
  </div>
</template>

<script setup>
  import data from "@/utils/patti-di-collaborazione.json";
</script>
