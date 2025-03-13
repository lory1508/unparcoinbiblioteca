<template>
  <div 
    class="flex items-center h-fit md:h-96"
    :class="{
      'flex-col': up,
      'flex-col-reverse': !up,
    }"
  >
    <div 
      class="flex flex-col gap-2 text-center"
      :class="{
        'text-biblioteca-blue': color === 'blue',
        'text-biblioteca-green': color === 'green',
        'text-biblioteca-red': color === 'red',
        'text-biblioteca-yellow': color === 'yellow',
        'text-biblioteca-purple': color === 'purple',
      }"
    >
      <div class="text-4xl font-bold custom-title-font">{{ date }}</div>
      <div class="flex flex-col">
        <div class="text-lg font-black text-nowrap">{{ type }}</div>
        <div class="text-nowrap">{{ time }}</div>
      </div>
    </div>
    <div 
      class="hidden w-1 h-32 rounded-full md:block"
      :class="{
        'bg-biblioteca-blue': color === 'blue',
        'bg-biblioteca-green': color === 'green',
        'bg-biblioteca-red': color === 'red',
        'bg-biblioteca-yellow': color === 'yellow',
        'bg-biblioteca-purple': color === 'purple',
      }"
    ></div>
  </div>
</template>

<script setup>

const props = defineProps({
  time: String,
  date: String,
  type: String,
  color: String,
  up: Boolean,
})

</script>

<style>

</style>