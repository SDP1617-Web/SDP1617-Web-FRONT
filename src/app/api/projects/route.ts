import { NextResponse } from 'next/server'
import { ENV_CONSTANTS } from '@/constants/EnvConstants'

export async function GET() {
  try {
    const response = await fetch(`${ENV_CONSTANTS.API_URL}/projects`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: '프로젝트 목록 조회 실패' },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('DEBUG ERROR:', error)
    return NextResponse.json({ error: '서버 통신 오류' }, { status: 500 })
  }
}
