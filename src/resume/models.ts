export type SocialLink = {
  icon: 'linkedin' | 'github' | 'globe' | 'mail' | 'phone'
  display: string
  url: string
}

export type WorkHistoryItem = {
  title: string
  employer: string
  from: string
  to?: string
  description: string
  keyNotes: string[]
  tags: string[]
}

export type EducationHistoryItem = {
  name: string
  provider: string
  completed: string
}

export type SkillsItem = {
  name: string
  skills: string[]
}
