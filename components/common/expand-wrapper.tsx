import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

interface ExpandWrapperProps {
  id: string
  title: string
  children: React.ReactNode
}

const ExpandWrapper: React.FC<ExpandWrapperProps> = ({
  id,
  title,
  children,
}) => {
  const [expanded, setExpanded] = useState(false)
  const expandedBtnRef = useRef<HTMLButtonElement>(null)
  const onToggleExpanded = () => setExpanded((e) => !e)

  useEffect(() => {
    if (!expanded) {
      expandedBtnRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }
  }, [expanded])
  return (
    <div
      id={id}
      className="container relative mx-auto mb-6 flex flex-col items-center justify-center"
    >
      <div className="title">{title}</div>
      <div
        className={expanded ? 'max-h-auto' : 'max-h-[300vh] overflow-y-hidden'}
      >
        {children}
      </div>
      <div className="bottom-inner-shadow w-full"></div>
      <button
        ref={expandedBtnRef}
        onClick={onToggleExpanded}
        className="mt-6 flex items-center justify-center gap-2 hover:animate-pulse"
      >
        <MdKeyboardArrowDown
          className={`transition-all ${expanded ? 'rotate-180' : 'rotate-0'}`}
        />
        {expanded ? 'See less projects' : 'See more projects'}
      </button>
    </div>
  )
}

export default ExpandWrapper
