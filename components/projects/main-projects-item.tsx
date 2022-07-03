import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../../common/types'
import { TechnologiesList } from './technologies-list'

interface MainProjectsItemProps {
  project: Project
  isLeft: boolean
}

export const MainProjectsItem: React.FC<MainProjectsItemProps> = ({
  project,
  isLeft,
}) => {
  return (
    <div
      className={`container mb-28 flex ${
        isLeft ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className="w-1/2">
        <div className="flex h-full items-center justify-center align-middle">
          <Image
            className="m-auto"
            src={project.image}
            width={project.imageWidth}
            height={project.imageHeight}
          />
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-center p-10 text-left">
        <div
          className="mb-6 text-3xl font-semibold uppercase tracking-wide text-primary"
          style={{ color: project.color }}
        >
          {project.title}
        </div>
        <div className="text-xl">{project.role}</div>
        <div className="mb-2 font-light italic text-accent">{project.date}</div>
        <TechnologiesList technologies={project.technologies} />
        <div className="whitespace-pre-line">{project.description}</div>
        {project.github && (
          <Link href={project.github} passHref>
            <a target="_blank" rel="noopener noreferrer">
              <button
                className="btn-primary mt-10"
                style={{ backgroundColor: project.color }}
              >
                See on GitHub
              </button>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
