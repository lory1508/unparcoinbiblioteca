<template>
  <div>
    <!-- Hero Section -->
    <!-- <div :class="`h-screen bg-pink-400 bg-no-repeat bg-cover`" > -->
    <div 
      :class="`h-screen`" 
      style="background-position: 50% 98%; background-size: auto; background-image: url('https://unparcoinbiblioteca.netlify.app/images/header_parco_biblioteca_460.jpg'); background-attachment: fixed;"
    >
      <div class="flex flex-col items-center justify-center h-full gap-4 px-6 text-white bg-black pt-80 bg-opacity-55">
        <div class="text-4xl font-bold tracking-tighter text-center uppercase md:text-6xl custom-title-font">{{ data.header.title }}</div>
        <div 
          class="max-w-4xl text-lg font-light text-center md:text-4xl"
          v-html="data.header.subtitle"
        />
      </div>
    </div>
    <Divider />

    <!-- About -->
    <div class="flex flex-col gap-16 px-8 py-24 md:flex-row md:px-16 md:gap-0">
      <div class="w-full md:w-1/3 md:pr-16">
        <img :src="data.about.img" alt="Un parco in biblioteca" class="-rotate-12 rounded-tr-[64px] rounded-bl-[64px]" />
      </div>
      <div class="flex flex-col w-full gap-6 md:w-2/3 text-foreground">
        <div class="text-2xl tracking-tighter uppercase md:text-4xl custom-title-font">{{ data.about.title }}</div>
        <div v-for="(item, index) in data.about.content" :key="`about-${index}`" class="flex flex-col">
          <span v-html="item" />
        </div>
      </div>
    </div>

    <!-- Why -->
    <div class="flex flex-col justify-center gap-16 px-6 lg:flex-row md:px-32">
      <div class="flex flex-col w-full transition-all duration-300 hover:scale-105 lg:w-2/3 lg:max-w-xl">
        <div class="flex flex-col w-full gap-6 p-8 bg-white border rounded-br-none shadow-2xl rounded-3xl border-zinc-200 ">
          <div class="w-full text-2xl tracking-tighter uppercase lg:text-4xl custom-title-font text-wrap">{{ data.why.title }}</div>
          <div 
            v-for="(why, index) in data.why.content"
            :key="`why-${index}`"
            class="flex flex-col gap-4"
          >
            <span v-html="why" />
          </div>
        </div>
        <div class="self-end inline-block w-12 -mt-1 overflow-hidden">
          <div class="h-16 origin-top-left transform -rotate-45 bg-white border border-zinc-200 "></div>
        </div>
      </div>
      <div class="w-full lg:w-1/3">
        <img :src="data.why.img" alt="Un parco in biblioteca" class="rounded-tl-[256px] rounded-tr-[128px] rounded-br-[256px] rounded-bl-[128px]" />
      </div>
    </div>
  </div>

  <!-- Principles -->
  <div class="flex flex-col items-center justify-center gap-8 px-6 mt-16 md:px-32">
    <div class="text-2xl tracking-tighter uppercase md:text-4xl custom-title-font">{{ data.principles.title }}</div>
    <div class="flex flex-wrap justify-center w-full gap-4">
      <div 
        v-for="(p, index) in data.principles.content" 
        :key="`principle-${index}`"
        class="flex items-center justify-center text-xl text-center text-white uppercase transition-all duration-300 rounded-full h-80 w-80 size-fit custom-title-font hover:scale-105"
        :style="`background-position: center; background-size: cover; background-repeat: no-repeat; background-image: url('${url}${p.img}');`"
      >
        <div class="w-64">
          {{ p.text }}
        </div>
      </div>
    </div>
    <div class="text-xl">{{ data.principles.note }}</div>
  </div>

  <!-- How it works -->
  <div class="flex flex-col w-full pt-8">
    <div 
      class="w-full h-[500px]"
      :style="`background-position: 35% 74%; background-size: auto; background-image: url('${url}${data.how_it_works.img}'); background-attachment: fixed;`"
    />
    <div class="flex flex-col items-center justify-start gap-4 py-16 text-white bg-biblioteca-red">  
      <div class="text-2xl tracking-tighter uppercase md:text-4xl custom-title-font">{{ data.how_it_works.title }}</div>
      <div class="justify-center px-6 text-center md:px-32">
        <div v-for="(how, index) in data.how_it_works.content" :key="`how-${index}`" class="flex flex-col gap-4 text-start">
          <span v-html="how" />
        </div>
      </div>
    </div>
  </div>

  <!-- When -->
  <div class="flex flex-col items-center justify-center gap-16 px-6 py-16 md:px-16">
    <div class="text-2xl tracking-tighter uppercase md:text-4xl custom-title-font">{{ data.when.title }}</div>
    <div class="flex flex-wrap justify-center w-full gap-32 2xl:flex-row 2xl:gap-0">
      <div v-for="(date, index) in data.when.dates" :key="`when-${index}`" class="w-fit">
        <Date :date="date.date" :time="date.time" :type="date.type" :color="date.color" :up="Boolean(index%2)" />
      </div>
    </div>
    <div class="text-xl" v-html="data.when.note" />
  </div>

  <!-- Join -->
  <div class="flex flex-col">
    <div class="px-6 pb-2 text-3xl tracking-tighter uppercase xl:px-32 xl:text-5xl custom-title-font text-biblioteca-blue">{{ data.join.title }}</div>
    <div class="flex flex-col gap-12 px-6 py-8 text-white xl:px-32 xl:flex-row bg-biblioteca-blue">
      <div class="flex flex-col w-full gap-4 xl:w-2/3">
        <div v-for="(how, index) in data.join.content" :key="`join-${index}`" class="flex flex-col gap-4 text-start first:xl:text-3xl first:text-2xl first:font-bold">
          <div v-html="how" />
        </div>
      </div>
      <img :src="data.join.img" alt="Un parco in biblioteca" class="w-full xl:w-1/3 xl:-mt-20" />
    </div>
  </div>

  <!-- Map -->
  <div>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5633.614874379829!2d7.5143006769038365!3d45.07699177107035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478840269ed9ebdb%3A0x104f16be184291f!2sBiblioteca%20Civica%20%22Alda%20Merini%22%20Rivoli!5e0!3m2!1sit!2sit!4v1741866033192!5m2!1sit!2sit" 
      width="100%" 
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>

<script setup>
import data from '@/utils/data.json'

const config = useRuntimeConfig()
const url = config.public.environment
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