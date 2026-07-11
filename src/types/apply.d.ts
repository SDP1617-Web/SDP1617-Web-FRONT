export type ApplyAnswer = {
  questionId: number
  content: string
}

export type ApplyQuestion = {
  content: string
  department: Department
  id: number
  maxLength: number
  sequence: number
  techRole: TechRole
}

export type ApplyPayload = {
  name: string
  phone: string
  birthDate: string
  email: string
  university: string
  major: string
  department: Department
  techRole: string | null
  answers: ApplyAnswer[]
  interviewSlotIds: number[]
}

export type Department = 'RESEARCH' | 'DESIGN' | 'TECH' | null

export type TechRole = 'FRONTEND' | 'BACKEND' | null

export type ApplyResult = {
  applicationId: number
}

export type ApplyPortfolioResult = {
  portfolioId: number
  fileUrl: string
  fileName: string
}

export type RecruitmentActiveResult = {
  id: number
  title: string
  semester: string
  startAt: string
  deadlineAt: string
}

export type InterviewSlot = {
  id: number
  slotDateTime: string
}
