<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isActive = ref(true)
const isFlash = ref(false)
const isShake = ref(false)
const isVisible = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  // Sequence
  setTimeout(() => {
    // 1. Trigger Beam Flash & Shake
    isFlash.value = true
    isShake.value = true

    // 2. Open Shutter after flash peaks
    setTimeout(() => {
      isActive.value = false // Opens shutters
      document.body.style.overflow = ''
      
      // 3. Cleanup from DOM
      setTimeout(() => {
        isVisible.value = false
      }, 500) // Match transition duration
    }, 400) // Match beam animation duration
  }, 800) // Initial delay before starting
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" 
         class="shutter-overlay" 
         :class="{ 'shutter-active': isActive, 'shutter-flash': isFlash, 'shutter-shake': isShake }">
      
      <div class="shutter-top"></div>
      <div class="shutter-beam"></div>
      <div class="shutter-bottom"></div>
      
    </div>
  </Teleport>
</template>

<style scoped>
.shutter-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    --dynamic-color: #3b82f6; /* Moonlink Blue */
}

.shutter-top, .shutter-bottom {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    background: #000;
    transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1);
    z-index: 2;
    will-change: transform;
}

.shutter-top { top: 0; transform: translateY(-100%); }
.shutter-bottom { bottom: 0; transform: translateY(100%); }

/* The Laser Beam */
.shutter-beam {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: #fff;
    box-shadow: 
        0 0 20px #fff,
        0 0 50px var(--dynamic-color),
        0 0 100px var(--dynamic-color);
    opacity: 0;
    transform: scaleX(0) translateY(-50%);
    z-index: 3;
}

/* ACTIVE STATE (CLOSED) */
.shutter-active .shutter-top { transform: translateY(0); }
.shutter-active .shutter-bottom { transform: translateY(0); }

/* BEAM FLASH */
.shutter-active.shutter-flash .shutter-beam {
    animation: beamExplosion 0.4s ease-out forwards;
}

/* SCREEN SHAKE (Applied to overlay or body) */
.shutter-shake {
    animation: impactShake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}

 @keyframes beamExplosion {
    0% { opacity: 0; transform: scaleX(0) translateY(-50%); }
    50% { opacity: 1; transform: scaleX(1) translateY(-50%); }
    100% { opacity: 0; transform: scaleX(1.2) scaleY(2) translateY(-50%); }
}

 @keyframes impactShake {
    10%, 90% { transform: translate3d(-2px, -2px, 0); }
    20%, 80% { transform: translate3d(4px, 4px, 0); }
    30%, 50%, 70% { transform: translate3d(-6px, -6px, 0); }
    40%, 60% { transform: translate3d(6px, 6px, 0); }
}
</style>