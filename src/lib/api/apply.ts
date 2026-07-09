import {
  ApplyPayload,
  ApplyResult,
  ApplyPortfolioResult,
  RecruitmentActiveResult,
} from '@/types/apply'

// 지원서 제출 결과 (PDF 업로드에 사용할 ID 포함)
// TODO: 백엔드 응답 형태에 맞춰 필드명 확인 필요

export const submitApply = async (
  recruitmentId: number,
  payload: ApplyPayload
): Promise<ApplyResult> => {
  const response = await fetch(`/api/apply/${recruitmentId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`지원서 제출에 실패했습니다. (${response.status})`)
  }

  const data = await response.json()
  const applyResult: ApplyResult = data.result

  return applyResult
}

export const submitApplyPdf = async (
  applicationId: number,
  file: File
): Promise<ApplyPortfolioResult> => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(`/api/apply/pdf/${applicationId}`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`파일 업로드에 실패했습니다. (${response.status})`)
  }

  const data = await response.json()
  const applyPortfolioResult: ApplyPortfolioResult = data.result

  return applyPortfolioResult
}

export const getRecruitmentId = async (): Promise<number> => {
  const response = await fetch(`/api/recruitments/active`)
  if (!response.ok) {
    throw new Error(
      `모집 공고 조회에 실패했습니다. (${response.status}, ${response.statusText})`
    )
  }
  const data = await response.json()
  const { id }: RecruitmentActiveResult = data.result
  return id
}
