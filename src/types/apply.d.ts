export type ApplyAnswer = {
  questionId: number
  answer: string
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
  // 추후에 일자에 대한 의논 필요
  interviewSlotIds: string[]
  // interviewSlotIds: number[]
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
