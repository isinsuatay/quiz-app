<template>
  <div class="font-sans text-gray-800">
    <router-view />
    
    <BackButton v-if="showBackButton" />
    <CursorAnimation v-if="showCursorAnimation" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import CursorAnimation from './components/CursorAnimation.vue'
import BackButton from './components/BackButton.vue'

const route = useRoute()

const showBackButton = computed(() => route.path !== '/')
const showCursorAnimation = computed(() => route.path !== '/')
</script>