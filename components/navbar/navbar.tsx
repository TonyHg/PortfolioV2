import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="fixed z-50 flex w-full flex-wrap items-center bg-white p-3 px-20 shadow-md">
        <Link href="/">
          <a className="mr-4 inline-flex items-center p-2 ">
            <span className="text-xl font-bold uppercase tracking-wide text-secondary transition hover:text-primary">
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
              <a className="w-full items-center justify-center rounded px-3 py-2 text-secondary transition hover:-translate-y-1 hover:text-primary lg:inline-flex lg:w-auto">
                Home
              </a>
            </Link>
            <Link href="#projects">
              <a className="w-full items-center justify-center rounded px-3 py-2 text-secondary transition hover:-translate-y-1 hover:text-primary lg:inline-flex lg:w-auto">
                Projects
              </a>
            </Link>
            <Link href="/">
              <a className="w-full items-center justify-center rounded px-3 py-2 text-secondary transition hover:-translate-y-1 hover:text-primary lg:inline-flex lg:w-auto">
                Gallery
              </a>
            </Link>
            <Link href="/resume">
              <a className="w-full items-center justify-center rounded px-3 py-2 text-secondary transition hover:-translate-y-1 hover:text-primary lg:inline-flex lg:w-auto">
                Resume
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
