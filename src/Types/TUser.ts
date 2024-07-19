export type TUser = {
  id: number
  fullName: string
  email: string
  scope: number
  createdAt: string
  updatedAt: string | null
  firstName: string | null,
  lastName: string | null,
  birthDate: Date | null,
  gender: number | null
}

export type TUpdateUser = {
  fullName: string
  firstName: string | null
  lastName: string | null
  email: string
  birthDate: Date | null
  gender: number
}