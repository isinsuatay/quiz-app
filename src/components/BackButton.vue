<template>
  <div class="back-button-container">
    <button class="back-btn" @click="handleBack">
      ← Geri Dön
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleBack() {
  router.back()
}
</script>

<style scoped>
.back-button-container {
  position: fixed;
  top: 250px;
  left: 20px;
  z-index: 1001;
}

.back-btn {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid white;
  border-radius: 9999px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  animation: fadeInLeft 0.5s ease-out;
}

.back-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateX(-3px);
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 1024px) {
  .back-button-container {
    position: relative;
    top: 10px;
    left: 0;

  }
}
</style>