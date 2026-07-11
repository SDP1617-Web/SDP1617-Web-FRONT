import { NextResponse } from 'next/server'
import { ENV_CONSTANTS } from '@/constants/EnvConstants'

const API_URL = ENV_CONSTANTS.API_URL

// TODO: 관련 API 엔드포인트 수정이 필요할 수 있음
export const GET = async (
  request: Request,
  { params }: { params: Promise<{ recruitmentId: string }> }
) => {
  const { recruitmentId } = await params
  const { searchParams } = new URL(request.url)
  const response = await fetch(
    `${API_URL}/recruitments/${recruitmentId}/interview-slots`,
    { method: 'GET' }
  )
  const data = await response.json()

  return NextResponse.json(data, { status: response.status })
}
