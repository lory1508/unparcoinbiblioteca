<template>
  <div class="flex flex-row items-center justify-center gap-2 h-fit">
    <div class="flex items-center justify-center h-fit">
      <div
        class="flex flex-col gap-2 px-8 pl-4 text-center border-8 border-r-0 rounded-r-md"
        :class="{
          'border-biblioteca-blue text-biblioteca-blue': color === 'blue',
          'border-biblioteca-green text-biblioteca-green': color === 'green',
          'border-biblioteca-red text-biblioteca-red': color === 'red',
          'border-biblioteca-yellow text-biblioteca-yellow': color === 'yellow',
          'border-biblioteca-purple text-biblioteca-purple': color === 'purple',
        }"
      >
        <div class="text-4xl font-bold custom-title-font">{{ date }}</div>
        <div class="flex flex-col">
          <div class="font-black text-md text-nowrap">{{ type }}</div>
          <div class="text-md text-nowrap">{{ time }}</div>
        </div>
      </div>
      <Icon
        icon="teenyicons:right-outline"
        width="128"
        class="p-0 -ml-11"
        :class="{
          'text-biblioteca-blue': color === 'blue',
          'text-biblioteca-green': color === 'green',
          'text-biblioteca-red': color === 'red',
          'text-biblioteca-yellow': color === 'yellow',
          'text-biblioteca-purple': color === 'purple',
        }"
      />
      <!-- <div class="inline-block w-20 overflow-hidden">
        <div
          class="origin-top-left transform rotate-45 border-2 h-[108px]"
          :class="{
            'border-biblioteca-blue': color === 'blue',
            'border-biblioteca-green': color === 'green',
            'border-biblioteca-red': color === 'red',
            'border-biblioteca-yellow': color === 'yellow',
            'border-biblioteca-purple': color === 'purple',
          }"
        ></div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  const props = defineProps({
    time: String,
    date: String,
    type: String,
    color: String,
    up: Boolean,
  })
</script>

<style></style>
