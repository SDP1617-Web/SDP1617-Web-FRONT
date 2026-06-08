import { NextResponse } from 'next/server'
import { ENV_CONSTANTS } from '@/constants/EnvConstants'

const API_URL = ENV_CONSTANTS.API_URL

// TODO: 관련 API 엔드포인트 수정이 필요할 수 있음
export const POST = async (
  request: Request,
  { params }: { params: Promise<{ applicationId: string }> }
) => {
  const { applicationId } = await params
  const formData = await request.formData()
  const file = formData.get('file')

  if (!(file instanceof File)) {
    return NextResponse.json(
      { message: '파일이 첨부되지 않았습니다.' },
      { status: 400 }
    )
  }

  const upstreamForm = new FormData()
  upstreamForm.append('file', file)

  const response = await fetch(`${API_URL}/apply/${applicationId}/portfolio`, {
    method: 'POST',
    body: upstreamForm,
  })
  const data = await response.json()
  return NextResponse.json(data)
}
