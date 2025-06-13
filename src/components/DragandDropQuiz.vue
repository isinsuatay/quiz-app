<template>
  <div class="quiz-container">
    <div class="answers-container">
      <div
        v-for="ans in shuffledAnswers"
        :key="ans"
        class="answer-option"
        draggable="true"
        @dragstart="onDragStart"
        :id="'ans-' + ans.replace(/\s+/g, '-')"
      >
        {{ ans }}
      </div>
    </div>

    <div class="questions-container">
      <div v-for="(q, i) in questions" :key="i" class="question-card">
        <span>{{ splitQuestion(q.text).before }}</span>
        <span
          class="answer-slot"
          :data-answer="q.answer"
          @dragover.prevent
          @drop="(e) => handleDrop(e, i)"
          @dragenter="onDragEnter"
          @dragleave="onDragLeave"
        >
          {{ userAnswers[i] || "" }}
        </span>
        <span>{{ splitQuestion(q.text).after }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { quizzes } from "../data/quizzes";
import "../assets/styles/dragDrop.css";

const route = useRoute();
const topicId = ref((route.params.topicId as string) || "donanim_giris");

const questions = computed(() => quizzes[topicId.value] ?? []);

const userAnswers = ref<(string | null)[]>([]);

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

const shuffledAnswers = ref<string[]>([]);

watch(
  questions,
  (newQuestions) => {
    userAnswers.value = newQuestions.map(() => null);
    const answersSet = new Set(newQuestions.map((q) => q.answer));
    shuffledAnswers.value = shuffle(Array.from(answersSet));
  },
  { immediate: true }
);

function splitQuestion(text: string) {
  const parts = text.split("___");
  return {
    before: parts[0],
    after: parts[1] || "",
  };
}

function onDragStart(e: DragEvent) {
  if (!e.dataTransfer) return;
  const target = e.target as HTMLElement;
  e.dataTransfer.setData("text/plain", target.textContent || "");
}

function onDragEnter(e: DragEvent) {
  const el = e.currentTarget as HTMLElement;
  el.classList.add("drag-over");
}

function onDragLeave(e: DragEvent) {
  const el = e.currentTarget as HTMLElement;
  el.classList.remove("drag-over");
}

function handleDrop(e: DragEvent, questionIndex: number) {
  e.preventDefault();

  const droppedText = e.dataTransfer?.getData("text/plain") ?? null;
  const expected = questions.value[questionIndex]?.answer;
  const target = e.currentTarget as HTMLElement;

  target.classList.remove("drag-over");

  if (
    droppedText !== null &&
    droppedText === expected &&
    !userAnswers.value[questionIndex]
  ) {
    userAnswers.value[questionIndex] = droppedText;
    shuffledAnswers.value = shuffledAnswers.value.filter(
      (a) => a !== droppedText
    );
  }
}
</script>
