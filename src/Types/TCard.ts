import {TFlashCard} from "./TFlashCard.ts";

export type TCard = {
  id: number
  creator_id: number
  title: string
  content: TFlashCard[]
  status: number
  content_type: number
  subject_id: number
  created_at: Date
  updated_at: Date
}