<template>
  <div
    class="flex flex-col items-center justify-center gap-8 px-6 mt-16 md:px-32"
  >
    <div
      class="text-2xl tracking-tighter uppercase md:text-4xl custom-title-font"
    >
      {{ data.title }}
    </div>

    <div
      class="flex flex-wrap items-center justify-center w-full gap-x-4 gap-y-16"
    >
      <div
        v-for="(date, index) in data.dates"
        :key="`when-${index}`"
        class="items-center justify-center text-white rounded-xl w-fit"
        :class="{
          'bg-biblioteca-blue': date.color === 'blue',
          'bg-biblioteca-green': date.color === 'green',
          'bg-biblioteca-red': date.color === 'red',
          'bg-biblioteca-yellow': date.color === 'yellow',
          'bg-biblioteca-purple': date.color === 'purple',
        }"
      >
        <Carousel v-if="items" :items="items" mode="auto" class="max-w-md" />
        <div
          class="flex flex-col justify-center w-full gap-4 px-4 py-2 text-center"
        >
          <h1 class="text-4xl font-bold custom-title-font">{{ date.date }}</h1>
          <div class="font-black text-center text-md text-nowrap">
            {{ date.type }}
          </div>
        </div>
        <!-- <Date
          :date="date.date"
          :time="date.time"
          :type="date.type"
          :color="date.color"
          :up="Boolean(index % 2)"
          :href="date?.href || ''"
          :background="date?.background || ''"
        /> -->
      </div>
    </div>
    <div class="pb-16 text-xl" v-html="data.note" />
  </div>
</template>

<script setup>
  import data from "@/utils/cosa-e-stato-fatto.json";
  import Carousel from "~/components/Carousel.vue";

  const items = [
    "images/stock/fog.jpg",
    "images/stock/rocks.jpg",
    "images/stock/sea.jpg",
    "images/stock/ship.jpg",
    "images/stock/sunset.jpg",
    "images/stock/trees.jpg",
  ];
</script>
