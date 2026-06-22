<template>
  <div
    class="absolute z-50 flex flex-col items-center justify-center w-full h-full gap-6 bg-indigo-900 bg-opacity-50 backdrop-blur-sm"
  >
    <div
      class="book-loader"
      :style="{
        '--loader-size': size + 'px',
        '--loader-speed': speed + 's',
      }"
      role="status"
      aria-label="Loading"
    >
      <svg viewBox="0 0 320 240" class="book-svg" aria-hidden="true">
        <defs>
          <linearGradient id="paperGradient" x1="0" x2="1">
            <stop offset="0%" stop-color="var(--paper-light)" />
            <stop offset="100%" stop-color="var(--paper-dark)" />
          </linearGradient>

          <linearGradient id="paperGradient2" x1="0" x2="1">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="100%" stop-color="#ececec" />
          </linearGradient>

          <filter id="pageShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.18" />
          </filter>

          <filter id="bookShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.12" />
          </filter>
        </defs>

        <!-- ground shadow -->
        <ellipse cx="160" cy="205" rx="95" ry="10" class="ground-shadow" />

        <g class="book-group">
          <!-- LEFT OUTER STACK -->
          <path
            d="
            M58 86
            Q110 84 150 132
            L150 178
            Q104 146 54 148
            Z"
            class="cover-stack"
          />

          <path
            d="
            M72 72
            Q116 74 150 126
            L150 178
            Q112 142 68 138
            Z"
            class="cover-stack-inner"
          />

          <!-- RIGHT OUTER STACK -->
          <path
            d="
            M262 86
            Q210 84 170 132
            L170 178
            Q216 146 266 148
            Z"
            class="cover-stack"
          />

          <path
            d="
            M248 72
            Q204 74 170 126
            L170 178
            Q208 142 252 138
            Z"
            class="cover-stack-inner"
          />

          <!-- LEFT RESTING PAGES -->

          <path
            d="
            M86 48
            Q122 48 150 92
            L150 178
            Q118 146 86 142
            Z"
            class="page layer-1"
          />

          <path
            d="
            M92 50
            Q126 50 150 95
            L150 178
            Q122 148 92 145
            Z"
            class="page layer-2"
          />

          <!-- FLIPPING PAGE 3 -->
          <g class="flip-page flip-3">
            <path
              d="
              M170 92
              Q198 48 234 48
              L234 142
              Q198 146 170 178
              Z"
              class="page moving-page"
            />
          </g>

          <!-- FLIPPING PAGE 2 -->
          <g class="flip-page flip-2">
            <path
              d="
              M170 92
              Q198 48 234 48
              L234 142
              Q198 146 170 178
              Z"
              class="page moving-page"
            />
          </g>

          <!-- FLIPPING PAGE 1 -->
          <g class="flip-page flip-1">
            <path
              d="
              M170 92
              Q198 48 234 48
              L234 142
              Q198 146 170 178
              Z"
              class="page moving-page"
            />
          </g>

          <!-- FRONT RIGHT PAGE -->

          <path
            d="
            M170 92
            Q198 48 234 48
            L234 142
            Q198 146 170 178
            Z"
            class="page front-page"
          />

          <!-- SPINE -->

          <path
            d="
            M160 90
            C156 110 156 150 156 178
            L164 178
            C164 150 164 110 160 90
            Z"
            class="spine"
          />

          <!-- BOTTOM CURVE -->

          <path
            d="
            M58 148
            Q108 136 160 178
            Q212 136 262 148
          "
            class="bottom-curve"
          />
        </g>
      </svg>

      <div
        v-if="showText"
        class="text-lg font-bold text-center text-white loading-text"
      >
        {{ text }}
      </div>
    </div>
  </div>
  <div class="flex-1"></div>
</template>

<script>
  export default {
    name: "LibraryBookLoader",

    props: {
      text: {
        type: String,
        default: "Loading books...",
      },

      showText: {
        type: Boolean,
        default: true,
      },

      size: {
        type: Number,
        default: 220,
      },

      speed: {
        type: Number,
        default: 2.4,
      },
    },
  };
</script>

<style scoped>
  .book-loader {
    --paper-light: #ffffff;
    --paper-dark: #ececec;

    --outline: #111827;

    --cover: #0f172a;
    --cover-inner: #1f2937;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .book-svg {
    width: var(--loader-size);
    height: auto;
    overflow: visible;
  }

  .book-group {
    filter: url(#bookShadow);
    animation: floatBook 3s ease-in-out infinite;
  }

  .ground-shadow {
    fill: rgba(0, 0, 0, 0.12);
    animation: shadowPulse 3s ease-in-out infinite;
  }

  .cover-stack {
    fill: var(--cover);
  }

  .cover-stack-inner {
    fill: var(--cover-inner);
  }

  .page {
    fill: url(#paperGradient);
    stroke: var(--outline);
    stroke-width: 2.6;
    stroke-linejoin: round;
  }

  .front-page {
    fill: url(#paperGradient2);
  }

  .layer-1 {
    opacity: 0.92;
  }

  .layer-2 {
    opacity: 0.97;
  }

  .spine {
    fill: var(--outline);
  }

  .bottom-curve {
    fill: none;
    stroke: var(--outline);
    stroke-width: 3.5;
    stroke-linecap: round;
  }

  .moving-page {
    filter: url(#pageShadow);
  }

  /* ----------------------- */
  /* PAGE FLIP ANIMATION */
  /* ----------------------- */

  .flip-page {
    transform-origin: 160px 178px;
    transform-box: fill-box;
  }

  .flip-1 {
    animation: pageFlip var(--loader-speed) infinite;
  }

  .flip-2 {
    animation: pageFlip var(--loader-speed) infinite;
    animation-delay: calc(var(--loader-speed) * 0.18);
  }

  .flip-3 {
    animation: pageFlip var(--loader-speed) infinite;
    animation-delay: calc(var(--loader-speed) * 0.36);
  }

  @keyframes pageFlip {
    0% {
      opacity: 0;
      transform: perspective(1000px) rotateY(0deg) translateX(0);
    }

    10% {
      opacity: 1;
    }

    45% {
      opacity: 1;
      transform: perspective(1000px) rotateY(-75deg) translateX(-6px);
    }

    70% {
      opacity: 1;
      transform: perspective(1000px) rotateY(-140deg) translateX(-14px);
    }

    100% {
      opacity: 0;
      transform: perspective(1000px) rotateY(-180deg) translateX(-20px);
    }
  }

  /* ----------------------- */
  /* FLOAT */
  /* ----------------------- */

  @keyframes floatBook {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes shadowPulse {
    0%,
    100% {
      opacity: 0.55;
      transform: scaleX(1);
    }

    50% {
      opacity: 0.35;
      transform: scaleX(0.92);
    }
  }

  /* ----------------------- */
  /* DARK MODE */
  /* ----------------------- */

  :global(.dark) .book-loader {
    --paper-light: #4b5563;
    --paper-dark: #374151;

    --outline: #f3f4f6;

    --cover: #e5e7eb;
    --cover-inner: #cbd5e1;
  }

  :global(.dark) .loading-text {
    color: #cbd5e1;
  }

  /* ----------------------- */
  /* REDUCED MOTION */
  /* ----------------------- */

  @media (prefers-reduced-motion: reduce) {
    .flip-1,
    .flip-2,
    .flip-3,
    .book-group,
    .ground-shadow {
      animation: none !important;
    }

    .flip-page {
      opacity: 0;
    }
  }
</style>
