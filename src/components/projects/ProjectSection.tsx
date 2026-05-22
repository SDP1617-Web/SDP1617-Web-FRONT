import React, { useState } from 'react'

// common components
// import ProjectCard from '../../components/';

interface ProjectData {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
}

export default function ProjectPage() {
  // 현재 어떤 카드가 선택(활성화)되었는지 관리하는 상태 (기본값은 첫 번째 프로젝트)
  const [activeId, setActiveId] = useState<number>(1)

  // public 폴더에 넣은 이미지 경로는 '/'로 시작하도록 지정하면 됩니다.
  const projects: ProjectData[] = [
    {
      id: 1,
      title: '첫 번째 프로젝트 제목',
      description: '첫 번째 프로젝트에 대한 한 줄 설명입니다.',
      category: 'Web',
      imageUrl: '/images/project1.png', // public/images/project1.png
    },
    {
      id: 2,
      title: '두 번째 프로젝트 제목',
      description: '두 번째 프로젝트에 대한 한 줄 설명입니다.',
      category: 'App',
      imageUrl: '/images/project2.png',
    },
    {
      id: 3,
      title: '세 번째 프로젝트 제목',
      description: '세 번째 프로젝트에 대한 한 줄 설명입니다.',
      category: 'Design',
      imageUrl: '/images/project3.png',
    },
    {
      id: 4,
      title: '네 번째 프로젝트 제목',
      description: '네 번째 프로젝트에 대한 한 줄 설명입니다.',
      category: 'Branding',
      imageUrl: '/images/project4.png',
    },
  ]

  return (
    <div className="flex w-[1920px] flex-col items-start justify-center gap-8 bg-black px-[360px] py-[104px]">
      {/* 
        2열(Grid)로 배치하고, 
        위아래 간격(row-gap)은 57px, 양옆 간격(column-gap)은 48px로 설정했습니다.
      */}
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
          />
        ))}
      </div>
    </div>
  )
}
