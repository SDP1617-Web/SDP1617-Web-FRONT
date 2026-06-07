export type ApplyAnswer = {
  question: string
  answer: string
}

export type ApplyPayload = {
  name: string
  birth: string
  contact: string
  email: string
  team: string
  answers: ApplyAnswer[]
  interviewSlots: string[]
}

export const submitApply = async (payload: ApplyPayload) => {
  const response = await fetch('/api/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`지원서 제출에 실패했습니다. (${response.status})`)
  }

  return response.json()
}
