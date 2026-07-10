'use client'
import React, { useEffect, useState } from 'react'
import { ProjectCard } from '@/components/common/Card'

export default function ProjectSection() {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.result)) {
          const validProjects = data.result
            .filter((p: any) => p.id && p.id !== 'string' && p.id !== 'null')
            .map((p: any) => ({
              ...p,
              id: Number(p.id),
              thumbnailUrl:
                !p.thumbnailUrl || p.thumbnailUrl === 'string'
                  ? null
                  : p.thumbnailUrl,
            }))

          console.log('최종 처리된 데이터:', validProjects)
          setProjects(validProjects)
        }
      })
      .catch((err) => console.error('데이터 로드 실패:', err))
  }, [])

  return (
    <div className="flex w-full max-w-[1920px] flex-col items-start justify-center gap-8 bg-black px-4 py-[104px] md:px-12 xl:px-[360px]">
      <div className="grid w-full grid-cols-1 gap-x-[48px] gap-y-[57px] md:grid-cols-2 lg:grid-cols-2">
        {projects.map((p) => {
          if (!p.id || isNaN(p.id)) return null
          return (
            <ProjectCard className="max-w-[576px]" key={p.id} project={p} />
          )
        })}
      </div>
    </div>
  )
}
