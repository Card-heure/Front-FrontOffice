export type TCreateSubject = {
  name: string
}
export type TSubject = {
  id: number
  name: string
  creatorId: number
  createdAt: Date
  updatedAt: Date | null
}
