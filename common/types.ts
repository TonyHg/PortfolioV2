import { StaticImageData } from 'next/image'

export interface Project {
  title: string
  role: string
  date: string
  description?: string
  technologies?: [string, string][]
  image: string | StaticImageData
  imageSize?: number
  github?: string
  url?: string
  color: string
}
