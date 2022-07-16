import Link from 'next/link'
import styles from '../../styles/footer/footer.module.scss'

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

export const Footer = () => {
  return (
    <>
      <nav
        className={`flex flex-wrap justify-center p-3 px-20 ${styles.footer}`}
      >
        <Link href="/">
          <a className="jusitfy-center mr-0 inline-flex p-2 md:mr-4 ">
            <span className="text-xl font-bold uppercase tracking-wide text-white hover:text-gray-200">
              Tony Heng
            </span>
          </a>
        </Link>
        <div className="flex w-full flex-row justify-center md:flex-col md:justify-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
          <Link href="mailto:tony.heng@epita.fr" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <MdEmail className="mx-2 text-2xl text-primary text-white hover:text-secondary hover:text-gray-200" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/tony-heng/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="mx-2 text-2xl text-white hover:text-gray-200" />
            </a>
          </Link>
          <Link href="https://github.com/TonyHg" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="mx-1 text-2xl text-white hover:text-gray-200" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/thdesign._/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="mx-2 text-2xl text-white hover:text-gray-200" />
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
