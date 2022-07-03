import Link from 'next/link'
import { Project } from '../../common/types'
import { FaGithubSquare } from 'react-icons/fa'
import { TechnologiesList } from './technologies-list'
import Image from 'next/image'

interface OtherProjectsItemProps {
  project: Project
}

export const OtherProjectsItem: React.FC<OtherProjectsItemProps> = ({
  project,
}) => {
  return (
    <div className="container mb-16 flex justify-center px-44 align-middle">
      <div className="w-1/6">
        <div className="relative h-full w-5/6 p-5">
          <Image src={project.image} layout="fill" objectFit="scale-down" />
        </div>
      </div>
      <div className="flex w-5/6 flex-col justify-center align-middle">
        <div className="mb-2 flex items-end">
          {project.url ? (
            <Link href={project.url} passHref>
              <a target="_blank" rel="noopener noreferrer" className="mr-2">
                <span className="rounded bg-gray-200 px-2 hover:bg-gray-300">
                  {project.title}
                </span>
              </a>
            </Link>
          ) : (
            <span className="mr-2 rounded bg-gray-200 px-2">
              {project.title}
            </span>
          )}
          {project.github && (
            <Link href={project.github} passHref>
              <a target="_blank" rel="noopener noreferrer" className="mr-2">
                <FaGithubSquare fontSize={24} className="hover:text-primary" />
              </a>
            </Link>
          )}
          <span className="text-sm italic text-accent">{project.date}</span>
        </div>
        <TechnologiesList technologies={project.technologies} />
        <div className="whitespace-pre-line">{project.description}</div>
      </div>
    </div>
  )
}
