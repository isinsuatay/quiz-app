<template>
  <div class="robot-wrapper" :class="positionClass">
<div class="robot-container" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
  <img src="../assets/robot.PNG" alt="Hareketli Gözler" class="robot-image" />

  <!-- Thought bubble -->
  <div v-if="isHovered" class="thought-bubble">
    Yanlış cevaplayanlar sertifikayı anca yastığının altında görür,<br />
    o da REM uykusuna denk gelirse!
  </div>

  <!-- Eyes -->
  <div class="eye" ref="leftEyeRef" id="leftEye">
    <div class="pupil"></div>
  </div>
  <div class="eye" ref="rightEyeRef" id="rightEye">
    <div class="pupil"></div>
  </div>
</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { defineProps } from 'vue'
import '../assets/styles/cursorAnimation.css'

const props = defineProps<{ position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' }>()

const positionClass = computed(() => {
  return props.position ? `position-${props.position}` : 'position-bottom-left'
})

const leftEyeRef = ref<HTMLElement | null>(null)
const rightEyeRef = ref<HTMLElement | null>(null)

const isHovered = ref(false)

function handleMouseMove(e: MouseEvent) {
  const { clientX: mouseX, clientY: mouseY } = e

  ;[leftEyeRef.value, rightEyeRef.value].forEach((eye) => {
    if (!eye) return

    const pupil = eye.querySelector('.pupil') as HTMLElement | null
    const rect = eye.getBoundingClientRect()

    if (pupil && rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const angle = Math.atan2(mouseY - centerY, mouseX - centerX)
      const distance = Math.min(15, Math.hypot(mouseX - centerX, mouseY - centerY))

      const offsetX = Math.cos(angle) * distance
      const offsetY = Math.sin(angle) * distance

      pupil.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`
    }
  })
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>
