import { ENV_CONSTANTS } from '@/constants/EnvConstants'
import { NextResponse } from 'next/server'

const API_URL = ENV_CONSTANTS.API_URL

export const GET = async () => {
  const response = await fetch(`${API_URL}/recruitments/active`)
  if (!response.ok) {
    return NextResponse.json(
      { error: '해당 모집 공고를 찾울 수 없습니다.' },
      { status: 404 }
    )
  }
  const data = await response.json()
  return data
}
