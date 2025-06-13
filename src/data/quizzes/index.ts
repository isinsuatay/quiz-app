import { donanim_giris } from './donanim_giris'
import { anakart } from './anakart'
import { bios } from './bios'
import { pcb } from './pcb'
import { donanim_sorun } from './donanim_sorun'
import type { Question } from '../../types'

export const quizzes: Record<string, Question[]> = {
  donanim_giris,
  anakart,
  bios,
  pcb,
  donanim_sorun,
}

