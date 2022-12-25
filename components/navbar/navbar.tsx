import Link from 'next/link'
import { useState } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Theme } from '../../common/types'
import { useDarkMode } from '../../hooks/useDarkMode'

export const Navbar = () => {
  const [active, setActive] = useState(false)
  const [theme, toggleTheme] = useDarkMode()

  const handleClick = () => {
    setActive(!active)
  }

  const linkStyle: string =
    'w-full items-center justify-center rounded px-3 py-2 text-secondary transition hover:-translate-y-1 hover:text-primary lg:inline-flex lg:w-auto hover:dark:text-dark-primary'

  return (
    <>
      <nav className="fixed z-50 flex w-full flex-wrap items-center bg-background p-3 px-8 shadow-md dark:bg-dark-background md:px-20">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <span className="text-xl font-bold uppercase tracking-wide text-secondary transition hover:text-primary hover:dark:text-dark-primary">
              Tony Heng
            </span>
          </a>
        </Link>
        <button
          className=" ml-auto inline-flex rounded p-3 text-secondary outline-none hover:bg-secondary hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
        >
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
            <Link href="/">
              <a className={linkStyle}>Home</a>
            </Link>
            <Link href="/#projects">
              <a className={linkStyle}>Projects</a>
            </Link>
            <Link href="/gallery">
              <a className={linkStyle}>Gallery</a>
            </Link>
            <Link href="/resume">
              <a className={linkStyle}>Resume</a>
            </Link>
          </div>
        </div>
        <div
          onClick={() => {
            toggleTheme()
          }}
          className="cursor-pointer text-secondary hover:text-primary hover:dark:text-dark-primary md:ml-8"
        >
          {theme === Theme.light ? <BsFillSunFill /> : <BsFillMoonFill />}
        </div>
      </nav>
    </>
  )
}
