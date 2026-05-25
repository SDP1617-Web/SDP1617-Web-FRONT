'use client'
import React, { useState } from 'react'
import { ProjectCard } from '@/components/common/Card'

interface ProjectData {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  date: string
}

export default function ProjectPage() {
  const [activeId, setActiveId] = useState<number>(1)

  const projects: ProjectData[] = [
    {
      id: 1,
      title: 'Beanspot',
      description: '환경활동 찾기 플랫폼',
      category: '모바일 앱',
      imageUrl: '/images/project1.png',
      date: '2025.01',
    },
    {
      id: 2,
      title: '카카오톡 선물하기 플랫폼',
      description:
        '상대방만을 위해 취향 정보를 디지털 카드로 선물하는 큐레이션 서비스',
      category: '모바일 앱',
      imageUrl: '/images/project2.png',
      date: '2025.02',
    },
    {
      id: 3,
      title: '네트워킹 데이',
      description: '지속가능한 활동과 맛있는 음식을 먹어요 ',
      category: '모바일 앱',
      imageUrl: '/images/project3.png',
      date: '2025.03',
    },
    {
      id: 4,
      title: '행정부서에서 진행하는 활동들',
      description: '행정부서에서 진행하는 대외활동 및 공모전',
      category: '랜딩 페이지',
      imageUrl: '/images/project4.png',
      date: '2025.03',
    },
  ]

  return (
    <div className="flex w-[1920px] flex-col items-start justify-center gap-8 bg-black px-[360px] py-[104px]">
      <div className="grid w-full grid-cols-2 gap-x-[48px] gap-y-[57px]">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            category={project.category}
            imageUrl={project.imageUrl}
            isActive={activeId === project.id}
            onClick={() => setActiveId(project.id)}
            date={project.date}
          />
        ))}
      </div>
    </div>
  )
}
