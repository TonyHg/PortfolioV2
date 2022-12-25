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
      className={`mb-28 flex flex-wrap md:container ${
        isLeft ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className="w-full p-5 md:w-1/2 md:p-0">
        <div className="flex h-full items-center justify-center align-middle">
          <Image
            className="m-auto"
            src={project.image}
            width={project.imageWidth}
            height={project.imageHeight}
            alt="project-image"
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center p-10 text-left md:w-1/2">
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
