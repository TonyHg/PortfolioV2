import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../../common/types'

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
        <div
          className="flex"
          style={{ transform: `scale(${project.imageSize})` }}
        >
          <Image className="m-auto" src={project.image} />
        </div>
      </div>
      <div className="flex w-1/2 flex-col justify-center p-10 text-left">
        <div
          className="mb-2 text-3xl font-semibold uppercase tracking-wide text-primary"
          style={{ color: project.color }}
        >
          {project.title}
        </div>
        <div className="text-xl">{project.role}</div>
        <div className="mb-5 font-light italic text-accent">{project.date}</div>
        <div>{project.description}</div>
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
