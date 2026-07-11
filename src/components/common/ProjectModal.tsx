'use client'

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const imageUrl =
    project.thumbnailUrl && project.thumbnailUrl !== 'string'
      ? project.thumbnailUrl
      : null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[800px] overflow-y-auto rounded-[32px] bg-white p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-2xl font-bold"
          aria-label="닫기"
        >
          ✕
        </button>

        {imageUrl && (
          <img
            src={imageUrl}
            alt={project.name}
            className="bg-sdp-main-primary mb-8 h-[280px] w-[675px] rounded-[20px] object-cover"
          />
        )}

        <div className="flex flex-col gap-4">
          <span className="text-sm text-gray-600">{project.status}</span>
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {project.summary}
          </p>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}
