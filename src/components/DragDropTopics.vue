<template>
  <div class="topics-wrapper">

    <h2 class="topics-title">Sürükle Bırak Quiz Konuları</h2>

    <div class="topics-grid">
      <button
        v-for="(name, id) in topicNames"
        :key="id"
        @click="goToTopic(id)"
        class="topic-button"
        type="button"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import '../assets/styles/topics.css'

const router = useRouter()

const topicNames: Record<string, string> = {
  donanim_giris: 'Donanım Giriş',
  anakart: 'Anakart',
  bios: 'BIOS',
  pcb: 'PCB',
  donanim_sorun:' Donanım Sorunları',
}

const goToTopic = (topicId: string) => {
  router.push(`/drag-drop/${topicId}`)
}

</script>
