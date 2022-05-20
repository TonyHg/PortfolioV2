import { StaticImageData } from 'next/image'

export interface Technology {
  title: string
  color: string
}

export interface Project {
  title: string
  role?: string
  date: string
  description?: string
  technologies: Technology[]
  image: string | StaticImageData
  imageWidth?: number
  imageHeight?: number
  github?: string
  url?: string
  color?: string
}
