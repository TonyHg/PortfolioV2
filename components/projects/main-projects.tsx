import React from 'react'
import { mainProjects } from '../../common/projects'
import { MainProjectsItem } from './main-projects-item'
import ExpandWrapper from '../common/expand-wrapper'

export const MainProjects: React.FC = () => {
  return (
    <ExpandWrapper id="projects" title="MAIN PROJECTS">
      {mainProjects.map((project, idx) => (
        <MainProjectsItem
          key={`main-project-${idx}`}
          project={project}
          isLeft={idx % 2 === 0}
        />
      ))}
    </ExpandWrapper>
  )
}
