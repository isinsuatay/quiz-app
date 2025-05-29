import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MultipleChoiceTopics from '../components/MultipleChoiceTopics.vue'
import MultipleChoiceQuiz from '../components/MultipleChoiceQuiz.vue'
import DragDropTopics from '../components/DragDropTopics.vue'
import DragDropQuiz from '../components/DragandDropQuiz.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  
  { path: '/quiz', name: 'MultipleChoiceTopics', component: MultipleChoiceTopics },
  { path: '/quiz/:topicId', name: 'MultipleChoiceQuiz', component: MultipleChoiceQuiz },
  { path: '/drag-drop', name: 'DragDropTopics', component: DragDropTopics },
  { path: '/drag-drop/:topicId', name: 'DragDropQuiz', component: DragDropQuiz }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router