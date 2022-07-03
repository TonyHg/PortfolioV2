import { Technology } from '../../common/types'

interface TechnologiesListProps {
  technologies: Technology[]
}

export const TechnologiesList: React.FC<TechnologiesListProps> = ({
  technologies,
}) => {
  return (
    <div className="mb-2 flex">
      {technologies.map((technology, idx) => (
        <span
          key={`technology-${idx}`}
          className={`technology mr-2 uppercase`}
          style={{ backgroundColor: technology.color }}
        >
          {technology.title}
        </span>
      ))}
    </div>
  )
}
