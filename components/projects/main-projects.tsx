import { mainProjects } from '../../common/projects'
import { MainProjectsItem } from './main-projects-item'

export const MainProjects: React.FC = () => {
  return (
    <>
      <div
        id="projects"
        className="çontainer mx-auto flex flex-col items-center justify-center"
      >
        <div className="title">MAIN PROJECTS</div>
        {mainProjects.map((project, idx) => (
          <MainProjectsItem
            key={`main-project-${idx}`}
            project={project}
            isLeft={idx % 2 === 0}
          />
        ))}
      </div>
    </>
  )
}
