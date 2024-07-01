import {TFlashCard} from "./TFlashCard.ts";
import {TTest} from "./TTest.ts";

export type TCard = {
  id: number
  creator_id: number
  title: string
  content: TFlashCard[] | TTest[]
  status: number
  content_type: number
  subject_id: number
  created_at: Date
  updated_at: Date
}

export type TCreateCard = {
  title: string
  content: string
  content_type: number
  subject_id: number
}