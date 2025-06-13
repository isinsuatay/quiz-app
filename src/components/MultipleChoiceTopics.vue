<template>
  <div class="topics-wrapper">

    <h2 class="topics-title">Çoktan Seçmeli Quiz Konuları</h2>
    <div class="topics-grid">
      <button
        v-for="topic in topics"
        :key="topic.id"
        @click="goToTopic(topic.id)"
        class="topic-button"
        type="button"
      >
        {{ topic.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import '../assets/styles/topics.css'

const router = useRouter()

const topics = [
  { id: 'donanim_giris', name: 'Donanım Giriş' },
  { id: 'anakart', name: 'Anakart' },
  { id: 'pcb', name: 'PCB' },
  { id :'donanim_sorun', name:'Donanım Sorunları' }

]

const goToTopic = (topicId: string) => {
  router.push(`/quiz/${topicId}`)
}


</script>
