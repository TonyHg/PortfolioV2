import Link from 'next/link'
import { useState } from 'react'
import { BsFillArrowUpCircleFill, BsInfoCircleFill } from 'react-icons/bs'
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'

export const Fab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div
      className="fixed bottom-10 right-8 z-10 rounded-full bg-white p-4 shadow-md transition"
      onMouseEnter={(e) => setIsOpen(true)}
      onMouseLeave={(e) => setIsOpen(false)}
      onClick={(e) => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <div className="flex flex-col items-center">
          <Link href="mailto:tony.heng@epita.fr" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <MdEmail
                size="24"
                className="mb-2 text-primary hover:text-secondary"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/tony-heng/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <RiLinkedinFill
                size="24"
                className="mb-2 text-primary hover:text-secondary"
              />
            </a>
          </Link>
          <Link href="https://github.com/TonyHg" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <RiGithubFill
                size="24"
                className="mb-2 text-primary hover:text-secondary"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/thdesign._/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <RiInstagramFill
                size="24"
                className="mb-2 text-primary hover:text-secondary"
              />
            </a>
          </Link>
          <BsFillArrowUpCircleFill
            className="cursor-pointer text-secondary"
            size="24"
            onClick={scrollToTop}
          />
        </div>
      ) : (
        <div>
          <BsInfoCircleFill className="text-secondary" size="24" />
        </div>
      )}
    </div>
  )
}
