import { NextResponse } from 'next/server'
import { ENV_CONSTANTS } from '@/constants/EnvConstants'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const { projectId } = await params

  if (!projectId || projectId === 'string' || projectId === 'undefined') {
    console.warn(`[DEBUG] Invalid projetId`)
    return NextResponse.json(
      { error: '잘못된 프로젝트 ID입니다.' },
      { status: 400 }
    )
  }

  try {
    const response = await fetch(
      `${ENV_CONSTANTS.API_URL}/projects/${encodeURIComponent(projectId)}`,
      {
        method: 'GET',
        signal: AbortSignal.timeout(5000),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: '프로젝트 상세 조회 실패' },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Project detail fetch failed')
    return NextResponse.json({ error: '서버 통신 오류' }, { status: 500 })
  }
}
