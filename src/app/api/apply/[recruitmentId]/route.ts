import { NextResponse } from 'next/server'
import { ENV_CONSTANTS } from '@/constants/EnvConstants'

const API_URL = ENV_CONSTANTS.API_URL

// TODO: 관련 API 엔드포인트 수정이 필요할 수 있음
export const POST = async (
  request: Request,
  { params }: { params: Promise<{ recruitmentId: string }> }
) => {
  const { recruitmentId } = await params
  const body = await request.json()
  const response = await fetch(
    `${API_URL}/recruitments/${recruitmentId}/apply`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  )
  const data = await response.json()
  console.log(data)
  return NextResponse.json(data)
}
