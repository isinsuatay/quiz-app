<template>
  <div>
    <div class="quiz-wrapper">
      <div class="question-card">
        <p class="question-text">{{ currentIndex + 1 }}. {{ currentQuestion.text }}</p>
        <ul class="options">
          <li
            v-for="opt in currentQuestion.options"
            :key="opt"
            @click="handleAnswer(currentIndex, opt)"
            :class="[
              userAnswers[currentIndex] === opt ? 'selected' : '',
              showFeedback && opt === currentQuestion.correct && userAnswers[currentIndex] === opt ? 'correct' : '',
              showFeedback && userAnswers[currentIndex] === opt && userAnswers[currentIndex] !== currentQuestion.correct ? 'wrong' : '',
            ]"
          >
            {{ opt }}
          </li>
        </ul>
        <p v-if="showFeedback && userAnswers[currentIndex] !== currentQuestion.correct" class="correct-answer">
          Doğru cevap: {{ currentQuestion.correct }}
        </p>
      </div>
    </div>

    <div class="pagination">
      <button
        class="page-btn"
        @click="prevQuestion"
        :disabled="currentIndex === 0"
      >
        Geri
      </button>

      <button
        class="page-btn"
        @click="nextQuestion"
        :disabled="currentIndex === questions.length -1"
      >
        İleri
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { multipleChoiceData } from '../data/multipleChoiceData'
import '../assets/styles/multipleChoice.css'

const route = useRoute()

const topicId = route.params.topicId as string

const questions = computed(() => multipleChoiceData[topicId] ?? [])

const userAnswers = ref<(string | null)[]>([])

watch(questions, (newQs) => {
  userAnswers.value = newQs.map(() => null)
}, { immediate: true })

const currentIndex = ref(0)
const showFeedback = ref(false)

const currentQuestion = computed(() => questions.value[currentIndex.value] || { text: '', options: [], correct: '' })

function handleAnswer(questionIndex: number, selectedOption: string) {
  // if (userAnswers.value[questionIndex]) return // bir kere cevaplandıysa değiştirme

  userAnswers.value[questionIndex] = selectedOption
  showFeedback.value = true

  setTimeout(() => {
    showFeedback.value = false
  }, 2000)
}

function prevQuestion() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    showFeedback.value = false
  }
}

function nextQuestion() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    showFeedback.value = false
  }
}

</script>