<template>
  <div class="home-wrapper">
    <div class="left-panel">
      <CursorAnimation class="big-cursor-animation" />
    </div>

    <div class="right-panel">
      <div class="content-panel">
        <h1 class="main-title">🚀 QUIZ ZAMANI!!</h1>
        <div class="panel-buttons">
          <RouterLink to="/quiz" class="quiz-panel">
            <div class="icon">✅</div>
            <div class="text-group">
              <h2>Çoktan Seçmeli</h2>
              <p>Kendini klasik quizlerle sınamaya ne dersin?</p>
            </div>
          </RouterLink>

          <RouterLink to="/drag-drop" class="quiz-panel">
            <div class="icon">🧲</div>
            <div class="text-group">
              <h2>Sürükle Bırak</h2>
              <p>Doğru parçaları yerleştir, zihnini zorla!</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../assets/styles/home.css'
import CursorAnimation from './CursorAnimation.vue'
</script>