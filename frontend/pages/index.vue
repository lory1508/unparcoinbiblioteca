<template>
  <div>
    <!-- Hero Section -->
    <div :class="`h-screen bg-[url('${data.header.img}')] bg-no-repeat bg-cover`" >
      <div class="flex flex-col items-center justify-center pt-80 h-full text-white bg-black bg-opacity-55 gap-4 px-6">
        <div class="md:text-6xl text-4xl font-bold text-center custom-title-font tracking-tight">{{ data.header.title }}</div>
        <div class="md:text-4xl text-lg text-center max-w-4xl font-light">{{ data.header.subtitle }}</div>
      </div>
    </div>
    <Divider />

    <!-- About -->
    <div class="flex md:flex-row flex-col px-8 md:px-16 py-24 gap-16 md:gap-0">
      <div class="md:w-1/3 w-full md:pr-16">
        <NuxtImg :src="data.about.img" alt="Un parco in biblioteca" class="-rotate-12 rounded-tr-[64px] rounded-bl-[64px]" />
      </div>
      <div class="md:w-2/3 w-full text-foreground flex flex-col gap-6">
        <div class="md:text-4xl text-2xl custom-title-font tracking-tight">{{ data.about.title }}</div>
        <div v-for="(item, index) in data.about.content" :key="`about-${index}`" class="flex flex-col">
          <span v-html="item" />
        </div>
      </div>
    </div>

    <!-- Why -->
    <div class="flex flex-col md:flex-row justify-center gap-16 px-6 md:px-32">
      <div class="shadow-2xl hover:scale-105 transition-all duration-300 rounded-3xl border border-zinc-200 bg-white p-8 w-full md:w-2/3 md:max-w-xl flex flex-col gap-6">
        <div class="md:text-4xl text-2xl custom-title-font tracking-tight w-full text-wrap">{{ data.why.title }}</div>
        <div 
          v-for="(why, index) in data.why.content"
          :key="`why-${index}`"
          class="flex flex-col gap-4"
        >
          <span v-html="why" />
        </div>
      </div>
      <div class="w-full md:w-1/3">
        <NuxtImg :src="data.why.img" alt="Un parco in biblioteca" class="rounded-tl-[256px] rounded-tr-[128px] rounded-br-[256px] rounded-bl-[128px]" />
      </div>
    </div>
  </div>

  <!-- Principles -->
  <div class="flex flex-col justify-center items-center gap-8 mt-16 px-6 md:px-32">
    <div class="md:text-4xl text-2xl custom-title-font tracking-tight">{{ data.principles.title }}</div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div 
        v-for="(p, index) in data.principles.content" 
        :key="`principle-${index}`"
        class="rounded-full flex items-center text-center text-xl justify-center py-4 px-8 uppercase custom-title-font text-wrap"
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
      :style="`background-image: url('${data.how_it_works.img}')`"
    />
    <div class="bg-biblioteca-red text-white flex flex-col items-center justify-start gap-4 py-16">  
      <div class="md:text-4xl text-2xl custom-title-font tracking-tight">{{ data.how_it_works.title }}</div>
      <div class="justify-center text-center px-32">
        <div v-for="(how, index) in data.how_it_works.content" :key="`how-${index}`" class="flex flex-col text-start gap-4">
          <span v-html="how" />
        </div>
      </div>
    </div>
  </div>

  <!-- When -->

  <!-- Join -->
  <div class="flex flex-col">
    <div class="md:text-4xl text-2xl custom-title-font tracking-tight text-biblioteca-blue pb-2 px-32">{{ data.join.title }}</div>
    <div class="bg-biblioteca-blue px-32 py-8 text-white flex flex-row gap-12">
      <div class="flex flex-col w-2/3 gap-8">
        <div v-for="(how, index) in data.join.content" :key="`join-${index}`" class="flex flex-col text-start gap-4">
          <span v-html="how" />
        </div>
      </div>
      <NuxtImg :src="data.join.img" alt="Un parco in biblioteca" class="w-1/3 -mt-20" />
    </div>
  </div>
</template>

<script setup>
import data from '@/utils/data.json'

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