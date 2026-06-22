<template>
  <div
    v-if="items.length"
    class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl"
    :style="mode === 'auto' ? { height: height + 'px' } : {}"
  >
    <!-- Track -->
    <div
      class="flex transition-transform duration-300 ease-out"
      :style="{
        transform: `translateX(calc(-${current * 100}% + ${deltaX}px))`,
      }"
    >
      <div v-for="(item, i) in items" :key="i" class="flex-shrink-0 w-full">
        <!-- assume item is image URL -->
        <img
          :src="item"
          :data-index="i"
          loading="lazy"
          @load="updateHeight"
          class="w-full pointer-events-none select-none"
          alt="Carousel image"
          :class="
            mode === 'fixed' ? 'h-[400px] object-cover' : 'object-contain'
          "
        />
      </div>
    </div>

    <!-- Drag layer -->
    <div
      class="absolute inset-0 cursor-grab active:cursor-grabbing"
      @mousedown="onStart"
      @mousemove="onMove"
      @mouseup="onEnd"
      @mouseleave="onEnd"
      @touchstart="onStart"
      @touchmove="onMove"
      @touchend="onEnd"
    />

    <!-- Controls -->
    <button
      @click="prev"
      class="absolute px-3 py-2 text-white -translate-y-1/2 rounded-full left-3 top-1/2 bg-black/50"
    >
      ‹
    </button>

    <button
      @click="next"
      class="absolute px-3 py-2 text-white -translate-y-1/2 rounded-full right-3 top-1/2 bg-black/50"
    >
      ›
    </button>
  </div>
</template>

<script setup>
  import { ref, watch, nextTick, onMounted } from "vue";

  const props = defineProps({
    items: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      default: "fixed", // 'fixed' | 'auto'
    },
  });

  const current = ref(0);

  const startX = ref(0);
  const deltaX = ref(0);
  const dragging = ref(false);

  const height = ref(400);

  /* ---------------- NAV ---------------- */

  const next = () => {
    if (!props.items.length) return;
    current.value = (current.value + 1) % props.items.length;
  };

  const prev = () => {
    if (!props.items.length) return;
    current.value =
      (current.value - 1 + props.items.length) % props.items.length;
  };

  /* ---------------- DRAG ---------------- */

  const onStart = (e) => {
    dragging.value = true;
    startX.value = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onMove = (e) => {
    if (!dragging.value) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    deltaX.value = x - startX.value;
  };

  const onEnd = () => {
    if (!dragging.value) return;
    dragging.value = false;

    const threshold = 80;

    if (deltaX.value > threshold) prev();
    else if (deltaX.value < -threshold) next();

    deltaX.value = 0;
  };

  /* ---------------- AUTO HEIGHT ---------------- */

  const updateHeight = () => {
    if (props.mode !== "auto") return;

    nextTick(() => {
      const img = document.querySelector(`[data-index="${current.value}"]`);
      if (!img) return;

      const ratio = img.naturalHeight / img.naturalWidth;
      const width = img.clientWidth;

      height.value = width * ratio;
    });
  };

  onMounted(updateHeight);

  watch(current, updateHeight);
  watch(() => props.items, updateHeight);
</script>
