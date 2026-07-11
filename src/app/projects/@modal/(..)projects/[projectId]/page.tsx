'use client'

import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

export default function InterceptedProjectModal() {
  const router = useRouter()
  const { projectId } = useParams()
  const [project, setProject] = useState<any>(null)
  const [bgColor, setBgColor] = useState('#ffffff')
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!projectId) return
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.result) {
          setProject(data.result)
        }
      })
      .catch((err) => console.error('프로젝트 상세 로드 실패:', err))
  }, [projectId])

  const extractColor = () => {
    if (!imgRef.current) return
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = 1
    canvas.height = 1
    ctx.drawImage(imgRef.current, 0, 0, 1, 1)
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
    setBgColor(`rgb(${r}, ${g}, ${b})`)
  }

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 pt-[100px] backdrop-blur-sm"
      onClick={() => router.back()}
      onKeyDown={(e) => {
        if (e.key === 'Escape') router.back()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="프로젝트 상세"
    >
      <div
        className="relative max-h-[85vh] w-[1400px] overflow-y-auto rounded-[32px] bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex h-[323px] w-[1400px] items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <img
            ref={imgRef}
            src={project.thumbnailUrl}
            alt={project.name}
            className="h-[280px] w-[674.667px] rounded-[20px] object-cover"
            onLoad={extractColor}
            crossOrigin="anonymous"
          />
        </div>

        <button
          onClick={() => router.back()}
          className="text-sdp-grey-900 absolute top-8 right-8 z-10 text-2xl font-bold"
          aria-label="닫기"
        >
          ✕
        </button>

        <div className="flex flex-1 flex-col overflow-hidden px-20 py-12">
          <h1 className="h1 text-sdp-grey-900 mb-8">프로젝트 소개</h1>

          <div className="mb-6 flex items-center gap-2">
            <div className="bg-sdp-grey-100 body2 text-sdp-grey-600 inline-flex items-center justify-center rounded-[44739200px] px-[10.667px] py-[5.333px]">
              {project.status}
            </div>
            <span className="caption text-sdp-grey-500">
              {project.startDate}
            </span>
          </div>

          <h2 className="h3-sb text-sdp-grey-900 mb-3">{project.name}</h2>

          <p className="body2 text-sdp-grey-600 mb-6">{project.summary}</p>

          <p className="body1 text-sdp-grey-500 whitespace-pre-line">
            {project.description || '설명이 없습니다.'}
          </p>
        </div>
      </div>
    </div>
  )
}
