import { ENV_CONSTANTS } from '@/constants/EnvConstants'
import { NextResponse } from 'next/server'

const API_URL = ENV_CONSTANTS.API_URL

export const GET = async () => {
  const response = await fetch(`${API_URL}/recruitments/active`)
  if (!response.ok) {
    return NextResponse.json(
      { error: response.statusText },
      { status: response.status }
    )
  }
  const data = await response.json()
  return NextResponse.json(data)
}
