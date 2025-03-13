<template>
  <div class="flex flex-row items-center gap-2">
    <div 
      class="flex items-center -ml-1 h-fit 2xl:h-96"
      :class="{
        '2xl:flex-col': up,
        '2xl:flex-col-reverse': !up,
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
        class="hidden w-full h-[88px] border-r-4 2xl:block"
        :class="{
          'border-biblioteca-blue': color === 'blue',
          'border-biblioteca-green': color === 'green',
          'border-biblioteca-red': color === 'red',
          'border-biblioteca-yellow': color === 'yellow',
          'border-biblioteca-purple': color === 'purple',
          'border-b-4 rounded-br-lg' : up,
          'border-t-4 rounded-tr-lg' : !up,
        }"
      />
      <div
        class="2xl:hidden w-full h-[88px] border-b-4"
      />
    </div>
    <div class="2xl:hidden">
      <Icon 
        name="gravity-ui:arrow-right" 
        size="48" 
        :class="{
          'text-biblioteca-blue': color === 'blue',
          'text-biblioteca-green': color === 'green',
          'text-biblioteca-red': color === 'red',
          'text-biblioteca-yellow': color === 'yellow',
          'text-biblioteca-purple': color === 'purple',
        }"
      />
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

<style>

</style>