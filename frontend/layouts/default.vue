<template>
  <div class="flex flex-col w-full">
    <!-- Header -->
    <div class="flex flex-col " >
    <!-- <div class="flex flex-col sticky w-full top-0 bg-white bg-opacity-50" > -->
      <NuxtImg src="logo.png" alt="Un Parco In Biblioteca - Logo" width="215" height="70" class="my-6 ml-16" />
      <Divider />
    </div>
    <slot />
  </div>
</template>

<script setup>

</script>

<style>

</style>