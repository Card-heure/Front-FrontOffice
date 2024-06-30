export type TResponseLogin = {
  token: TToken
  id: number
  fullName: string
  email: string
  profilePic: string | null
  scope: number
  createdAt: string
  updatedAt: string | null
}

type TToken = {
  type: string
  name: string | null
  token: string
  abilities: string[]
  lastUsedAt: string | null
  expiresAt: string
}