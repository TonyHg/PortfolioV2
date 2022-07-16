import { Technology } from '../../common/types'

interface TechnologiesListProps {
  technologies: Technology[]
}

export const TechnologiesList: React.FC<TechnologiesListProps> = ({
  technologies,
}) => {
  return (
    <div className="mb-2 flex flex-wrap" style={{ marginTop: '-8px' }}>
      {technologies.map((technology, idx) => (
        <span
          key={`technology-${idx}`}
          className={`technology mr-2 uppercase`}
          style={{ backgroundColor: technology.color, marginTop: '8px' }}
        >
          {technology.title}
        </span>
      ))}
    </div>
  )
}
