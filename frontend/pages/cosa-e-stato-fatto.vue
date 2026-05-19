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
        class="items-center justify-center w-fit"
      >
        <Date
          :date="date.date"
          :time="date.time"
          :type="date.type"
          :color="date.color"
          :up="Boolean(index % 2)"
          :href="date?.href || ''"
          :background="date?.background || ''"
        />
      </div>
    </div>
    <div class="text-xl" v-html="data.note" />
  </div>
</template>

<script setup>
  import data from "@/utils/cosa-e-stato-fatto.json";
</script>
