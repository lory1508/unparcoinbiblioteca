<template>
  <div>
    <!-- Hero Section -->
    <!-- <div :class="`h-screen bg-pink-400 bg-no-repeat bg-cover`" > -->
    <div :class="`h-screen bg-[url('${url}${data.header.img}')] bg-no-repeat bg-cover`" >
      <div class="flex flex-col items-center justify-center h-full gap-4 px-6 text-white bg-black pt-80 bg-opacity-55">
        <div class="text-4xl font-bold tracking-tight text-center md:text-6xl custom-title-font">{{ data.header.title }}</div>
        <div class="max-w-4xl text-lg font-light text-center md:text-4xl">{{ data.header.subtitle }}</div>
      </div>
    </div>
    <Divider />

    <!-- About -->
    <div class="flex flex-col gap-16 px-8 py-24 md:flex-row md:px-16 md:gap-0">
      <div class="w-full md:w-1/3 md:pr-16">
        <NuxtImg :src="`${url}/images/parco_In_biblioteca_1.jpg`" alt="Un parco in biblioteca" class="-rotate-12 rounded-tr-[64px] rounded-bl-[64px]" />
      </div>
      <div class="flex flex-col w-full gap-6 md:w-2/3 text-foreground">
        <div class="text-2xl tracking-tight md:text-4xl custom-title-font">{{ data.about.title }}</div>
        <div v-for="(item, index) in data.about.content" :key="`about-${index}`" class="flex flex-col">
          <span v-html="item" />
        </div>
      </div>
    </div>

    <!-- Why -->
    <div class="flex flex-col justify-center gap-16 px-6 md:flex-row md:px-32">
      <div class="flex flex-col w-full gap-6 p-8 transition-all duration-300 bg-white border shadow-2xl hover:scale-105 rounded-3xl border-zinc-200 md:w-2/3 md:max-w-xl">
        <div class="w-full text-2xl tracking-tight md:text-4xl custom-title-font text-wrap">{{ data.why.title }}</div>
        <div 
          v-for="(why, index) in data.why.content"
          :key="`why-${index}`"
          class="flex flex-col gap-4"
        >
          <span v-html="why" />
        </div>
      </div>
      <div class="w-full md:w-1/3">
        <NuxtImg :src="`${url}${data.why.img}`" alt="Un parco in biblioteca" class="rounded-tl-[256px] rounded-tr-[128px] rounded-br-[256px] rounded-bl-[128px]" />
      </div>
    </div>
  </div>

  <!-- Principles -->
  <div class="flex flex-col items-center justify-center gap-8 px-6 mt-16 md:px-32">
    <div class="text-2xl tracking-tight md:text-4xl custom-title-font">{{ data.principles.title }}</div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
      <div 
        v-for="(p, index) in data.principles.content" 
        :key="`principle-${index}`"
        class="flex items-center justify-center px-8 py-4 text-xl text-center uppercase rounded-full custom-title-font text-wrap"
        :class="`bg-biblioteca-${principleBg(index)} text-white text-lg font-bold`"
      >
        {{ p }}
      </div>
    </div>
    <div class="text-lg">{{ data.principles.note }}</div>
  </div>

  <!-- How it works -->
  <div class="flex flex-col w-full pt-8 mb-96">
    <div 
      class="w-full h-[500px] bg-no-repeat bg-cover bg-center"
      :style="`background-image: url('${url}${data.how_it_works.img}')`"
    />
    <div class="flex flex-col items-center justify-start gap-4 py-16 text-white bg-biblioteca-red">  
      <div class="text-2xl tracking-tight md:text-4xl custom-title-font">{{ data.how_it_works.title }}</div>
      <div class="justify-center px-32 text-center">
        <div v-for="(how, index) in data.how_it_works.content" :key="`how-${index}`" class="flex flex-col gap-4 text-start">
          <span v-html="how" />
        </div>
      </div>
    </div>
  </div>

  <!-- When -->

  <!-- Join -->
  <div class="flex flex-col">
    <div class="px-32 pb-2 text-2xl tracking-tight md:text-4xl custom-title-font text-biblioteca-blue">{{ data.join.title }}</div>
    <div class="flex flex-row gap-12 px-32 py-8 text-white bg-biblioteca-blue">
      <div class="flex flex-col w-2/3 gap-8">
        <div v-for="(how, index) in data.join.content" :key="`join-${index}`" class="flex flex-col gap-4 text-start">
          <span v-html="how" />
        </div>
      </div>
      <NuxtImg :src="`${url}${data.join.img}`" alt="Un parco in biblioteca" class="w-1/3 -mt-20" />
    </div>
  </div>
</template>

<script setup>
import data from '@/utils/data.json'

const config = useRuntimeConfig()
const url = config.environment
const principleBgs = ["green", "red", "blue", "purple"]

const principleBg = (index) => {
  return principleBgs[index % principleBgs.length]
}
</script>

<style>
ul {
  list-style-type: disc;
  list-style-position: inside;
}
</style>