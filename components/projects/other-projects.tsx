import { otherProjects } from '../../common/projects'
import { OtherProjectsItem } from './other-projects.item'

export const OtherProjects: React.FC = () => {
  return (
    <>
      <div className="çontainer mx-auto flex w-full flex-col items-center justify-center">
        <div className="title">OTHER PROJECTS</div>
        {otherProjects.map((project, idx) => (
          <OtherProjectsItem key={`other-project-${idx}`} project={project} />
        ))}
      </div>
    </>
  )
}
