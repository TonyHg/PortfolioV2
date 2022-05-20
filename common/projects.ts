import { Color } from './colors'
import { Project } from './types'

import clonestagramImg from '../public/img/clonestagram.png'
import pingImg from '../public/img/ping.png'
import epilifeImg from '../public/img/epilife.png'
import chessImg from '../public/img/chess.png'
import shImg from '../public/img/42.png'
import ocrImg from '../public/img/ocr.png'
import rgImg from '../public/img/rg.png'
import upImg from '../public/img/up.png'
import timImg from '../public/img/tim.png'
import { technologies } from './technologies'

export const mainProjects: Project[] = [
  {
    title: 'TripNJoy',
    role: 'Flutter Developer',
    date: 'March-December 2022',
    description:
      'TripNJoy is an app for planning group trips by connecting people with similar interests. The frontend is built using Flutter and Riverpod as State Manager, the backend in Java Spring Boot.',
    technologies: [
      technologies.Flutter,
      technologies.Riverpod,
      technologies.SpringBoot,
    ],
    image: clonestagramImg,
    color: Color.saturatedBlue,
  },
  {
    title: 'Clonestagram',
    role: 'Fullstack Developper',
    date: 'July-August 2021',
    description:
      'Clonestragram is a Instagram clone made in MERN (MongoDb, Express.js, React.ts, Node,js) fullstack approach. Authentication built using JWT session token.',
    technologies: [
      technologies.MongoDB,
      technologies.Express,
      technologies.React,
      technologies.Node,
    ],
    image: clonestagramImg,
    github: 'https://github.com/TonyHg/Clonestagram',
    color: Color.blue,
  },
  {
    title: 'PING',
    role: 'Java/Kotlin developer',
    date: 'June-July 2021',
    description:
      'Ping is an IDE made in Compose for Desktop (Kotlin Jetpack Compose). \
Deep design and development to provide the best possible user experience. The IDE manages GIT and Maven projects. Essential features such as editing, compiling and running projects are availables \
Fancier features like Custom Themes and Shortcuts. ',
    technologies: [
      technologies.Kotlin,
      technologies.Compose,
      technologies.Java,
    ],
    image: pingImg,
    imageHeight: 475,
    imageWidth: 572,
    github: 'https://github.com/Croisillons/PING',
    color: Color.turquoise,
  },
  {
    title: 'Epilife',
    role: 'Android/Kotlin Developper',
    date: 'March-July 2021',
    description:
      'Epilife is a timetable Android application for EPITA students.',
    technologies: [
      technologies.Android,
      technologies.Kotlin,
    ],
    image: epilifeImg,
    imageHeight: 500,
    imageWidth: 500,
    color: Color.vividBlue,
  },
  {
    title: 'CHESS AI',
    role: 'C++ Programmer',
    date: 'March 2021',
    description:
      'Chess AI is a Chess engine & Chess AI implementation. Bitboard implementation using MagicBitboard. ',
    technologies: [
      technologies.Cpp,
    ],
    image: chessImg,
    imageHeight: 300,
    imageWidth: 400,
    color: Color.grey,
  },
  {
    title: '42sh',
    role: 'C Programmer',
    date: 'November-December 2020',
    description:
      '42sh is a posix-compliant shell interpretor done in the scope of our ING1 project at EPITA. 42sh is a 4-weeks project made in C. 42sh was developped following the SCL (Shell Command Language). ',
    technologies: [technologies.C],
    image: shImg,
    color: Color.darkerBlue,
  },
  {
    title: 'OCR',
    role: 'C Programmer',
    date: 'October-December 2019',
    description:
      'OCR stands for Optical Character Recognition. A project made in C, with the use of a basic neural network trained, allows you to recover the text in the image of a printed text.',
    technologies: [technologies.C],
    image: ocrImg,
    github: 'https://github.com/TonyHg/OCR-1',
    imageHeight: 400,
    imageWidth: 500,
    color: Color.purple,
  },
  {
    title: 'Registre Général',
    role: 'ASP.NET Fullstack Developper',
    date: 'June-August 2019',
    description:
      'Registre Général is a web application for centralizing and managing our companies. Its primary advantage is the tokenization (BlockChain) of corporate records and documents',
    technologies: [
      technologies.NET,
      technologies.CSharp,
      technologies.Razor,
      technologies.Knockout,
      technologies.Ssms,
    ],
    image: rgImg,
    color: Color.lightGreen,
  },
  {
    title: 'UPRISING',
    role: 'Designer & Unity Developper',
    date: 'January-June 2019',
    description:
      'Uprising is a first person shooter game, which goals is to jump from platforms to platforms to get to the top of the map, shoot the other players to make them fall. The last player remaining wins. This game aims to be simple and easy to play.',
    technologies: [
      technologies.Unity,
      technologies.Figma,
    ],
    image: upImg,
    github: 'https://github.com/TonyHg/Uprising',
    color: Color.darkRed,
  },
  {
    title: 'TIME IS MONET',
    role: 'Game Designer & Python Developper',
    date: 'January-June 2019',
    description:
      'Time is Monet is a 2D platformer made in Python. You are playing a student late to his math lesson. Hurry up! You need to pass through the others students in order to be in time.',
    technologies: [
      technologies.Python,
      technologies.Pygame,
    ],
    image: timImg,
    github: 'https://github.com/TonyHg/TimeIsMonet',
    color: Color.skyBlue,
  },
]

export const otherProjects: Project[] = [
  {
    title: 'TIME IS MONET',
    role: 'Game Designer & Python Developper',
    date: 'January-June 2019',
    description:
      'Time is Monet is a 2D platformer made in Python. You are playing a student late to his math lesson. Hurry up! You need to pass through the others students in order to be in time.',
    technologies: [
      
    ],
    image: timImg,
    github: 'https://github.com/TonyHg/TimeIsMonet',
    color: Color.skyBlue,
  },
]
