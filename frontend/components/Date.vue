<template>
  <div class="flex flex-row items-center justify-center gap-2 h-fit">
    <div class="flex items-center justify-center lg:-ml-28 h-fit">
      <div
        class="flex flex-col gap-2 pl-4 pr-8 text-center text-white lg:pl-20"
        :class="{
          'bg-biblioteca-blue': color === 'blue',
          'bg-biblioteca-green': color === 'green',
          'bg-biblioteca-red': color === 'red',
          'bg-biblioteca-yellow': color === 'yellow',
          'bg-biblioteca-purple': color === 'purple',
        }"
      >
        <div class="text-4xl font-bold custom-title-font">{{ date }}</div>
        <div class="flex flex-col">
          <div class="font-black text-md text-nowrap">{{ type }}</div>
          <div class="text-md text-nowrap">{{ time }}</div>
        </div>
      </div>
      <div class="inline-block w-20 overflow-hidden">
        <div
          class="origin-top-left transform rotate-45 h-[108px]"
          :class="{
            'bg-biblioteca-blue': color === 'blue',
            'bg-biblioteca-green': color === 'green',
            'bg-biblioteca-red': color === 'red',
            'bg-biblioteca-yellow': color === 'yellow',
            'bg-biblioteca-purple': color === 'purple',
          }"
        ></div>
      </div>
    </div>
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

<style></style>
