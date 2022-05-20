import Link from 'next/link'
import styles from '../../styles/footer/footer.module.scss'

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

export const Footer = () => {
  return (
    <>
      <nav className={`flex flex-wrap items-center p-3 px-20 ${styles.footer}`}>
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <span className="text-xl font-bold uppercase tracking-wide text-white">
              Tony Heng
            </span>
          </a>
        </Link>
        <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
          <Link href="https://www.linkedin.com/in/tony-heng/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="mx-2 text-2xl text-white" />
            </a>
          </Link>
          <Link href="https://github.com/TonyHg" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="mx-1 text-2xl text-white" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/thdesign._/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="mx-2 text-2xl text-white" />
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
