import { otherProjects } from '../../common/projects'
import { OtherProjectsItem } from './other-projects.item'
import ExpandWrapper from '../common/expand-wrapper'

export const OtherProjects: React.FC = () => {
  return (
    <ExpandWrapper id="other-projects" title="OTHER PROJECTS">
      {otherProjects.map((project, idx) => (
        <OtherProjectsItem key={`other-project-${idx}`} project={project} />
      ))}
    </ExpandWrapper>
  )
}
