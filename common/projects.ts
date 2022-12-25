import { Color } from './colors'
import { Project } from './types'

import tripnjoyImg from '../public/img/tripnjoy.png'
import clonestagramImg from '../public/img/clonestagram.png'
import pingImg from '../public/img/ping.png'
import epilifeImg from '../public/img/epilife.png'
import chessImg from '../public/img/chess.png'
import shImg from '../public/img/42.png'
import ocrImg from '../public/img/ocr.png'
import rgImg from '../public/img/rg.png'
import upImg from '../public/img/up.png'
import timImg from '../public/img/tim.png'

import a11yImg from '../public/img/a11y.png'
import threeJsImg from '../public/img/threejs.png'
import kosImg from '../public/img/kos.png'
import johnMcCarthyImg from '../public/img/john-mccarthy.png'
import seoImg from '../public/img/seo.png'
import tripnjoyboImg from '../public/img/tripnjoybo.svg'
import devopsImg from '../public/img/devops.svg'
import bootstrapVueImg from '../public/img/bootstrap-vue.png'
import tddImg from '../public/img/TDD.png'
import netImg from '../public/img/net.png'
import rakutenImg from '../public/img/rakuten.png'
import jpegImg from '../public/img/jpg.svg'
import eroImg from '../public/img/ero.svg'
import jsChatImg from '../public/img/js-chat.png'
import pizzaImg from '../public/img/pizza.svg'
import miniProjectImg from '../public/img/miniproject.png'
import calculatorImg from '../public/img/calculator.svg'
import rubikImg from '../public/img/rubiks.webp'
import marioImg from '../public/img/MarioKart.png'
import scmImg from '../public/img/SCM.svg'
import simonImg from '../public/img/SimonDrive.png'

import { technologies } from './technologies'

export const mainProjects: Project[] = [
  {
    title: 'Tuka',
    role: 'Frontend Engineer',
    date: 'July-December 2022',
    description:
      "Tuka is a webapp to monitor institution (school, company, etc) paper consumption. It aims to reduce paper consumption by increasing deforestation awareness.\n\nThe app is composed of a front-office and a back-office.\nThe front end displays an interactive 3d map of the user's institution, accompanied by trees around it, depending on the institution's paper consumption, the number of trees decreases.\n\nThe app is built with React, Next.js, and TailwindCSS. It uses Auth0 for authentication.",
    technologies: [
      technologies.ThreeJs,
      technologies.React,
      technologies.Next,
      technologies.Tailwind,
      technologies.Auth0,
    ],
    image: tripnjoyImg,
    color: Color.darkGreen,
  },
  {
    title: 'TripNJoy',
    role: 'Flutter Developer',
    date: 'March-December 2022',
    description:
      'TripNJoy is an app for planning group trips by connecting people with similar interests. The frontend is built using Flutter and Riverpod as State Manager, the backend in Java Spring Boot.\n\nFeatures:\n-Create your travel profile\n-Match people with same travel interests\n-Chat and video call\n-Budget management (Tricount-like)\n-Planning management',
    technologies: [
      technologies.Flutter,
      technologies.Riverpod,
      technologies.SpringBoot,
      technologies.Firebase,
    ],
    image: tripnjoyImg,
    color: Color.saturatedBlue,
  },
  {
    title: 'Clonestagram',
    role: 'Fullstack Developper',
    date: 'July-August 2021',
    description:
      'Clonestragram is a Instagram clone made in MERN (MongoDb, Express.js, React.ts, Node,js) fullstack approach. Authentication built using JWT session token.\n\nFeatures:\n- Authentication (register, login, jwt)\n- Post a image with a description\n- Like and comment posts\n- Search and follow other users\n- Chat with users',
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
      'Epilife is a timetable Android application for EPITA students.\n\nImplementation:\n- MVVM & Layered Architecture & EventBus\n- Migration of API, Retrofit2 & okhttp3\n- Fully working and resizable Widget\n- Notification using WorkManager\n- Authentication implementation using MSAL (Office 365 Auth)',
    technologies: [technologies.Android, technologies.Kotlin],
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
      'Chess AI is a Chess engine & Chess AI implementation. Bitboard implementation using MagicBitboard.\n\n Implementation:\n- Chess engine (generate all legal moves)\n- AI (NegaMax, alpha-beta prunning, evaluation)\n- UCI protocol, PGN parser\n- Perft\n- STL, Boost',
    technologies: [technologies.Cpp],
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
      '42sh is a posix-compliant shell interpretor done in the scope of our ING1 project at EPITA. 42sh is a 4-weeks project made in C. 42sh was developped following the SCL (Shell Command Language).\n\nImplementation:\n- Parsing & Lexing\n- Execution\n- Builtins\n- Variables & Functions\n- Arithmetic expansion',
    technologies: [technologies.C],
    image: shImg,
    color: Color.darkerBlue,
  },
  {
    title: 'OCR',
    role: 'C Programmer',
    date: 'October-December 2019',
    description:
      'OCR stands for Optical Character Recognition. A project made in C, with the use of a basic neural network trained, allows you to recover the text in the image of a printed text.\n\nImplementation: \n- Preprocessing  \n- Neural Network  \n- Postprocessing  \n- Dataset',
    technologies: [technologies.C],
    image: ocrImg,
    // github: 'https://github.com/TonyHg/OCR-1',
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
    technologies: [technologies.Unity, technologies.Figma],
    image: upImg,
    // github: 'https://github.com/TonyHg/Uprising',
    color: Color.darkRed,
  },
  {
    title: 'TIME IS MONET',
    role: 'Game Designer & Python Developper',
    date: 'January-June 2019',
    description:
      'Time is Monet is a 2D platformer made in Python. You are playing a student late to his math lesson. Hurry up! You need to pass through the others students in order to be in time.',
    technologies: [technologies.Python, technologies.Pygame],
    image: timImg,
    // github: 'https://github.com/TonyHg/TimeIsMonet',
    color: Color.skyBlue,
  },
]

export const otherProjects: Project[] = [
  {
    title: 'Nile - The accessibility e-commerce',
    date: 'December 2022 - January 2022',
    description:
      'Nile is an Amazon with accessibility. The goal is to provide a better experience for people with disabilities following a11y principles. The website is made in Svelte using SvelteKit.',
    technologies: [
      technologies.A11Y,
      technologies.Svelte,
      technologies.SvelteKit,
    ],
    image: a11yImg,
  },
  {
    title: 'Coruscent In Tenebris',
    date: 'December 2022',
    description:
      'Coruscent In Tenebris is a black market website made using Three.js. Find anything and everything in this black market, every item has its own secrets...',
    technologies: [
      technologies.ThreeJs,
      technologies.React,
      technologies.Figma,
    ],
    image: threeJsImg,
    url: 'https://coruscent-in-tenebris.vercel.app/',
    github: 'https://github.com/TonyHg/threejs-shop',
  },
  {
    title: 'King Of Smash',
    date: 'November 2022 - December 2022',
    description:
      'King Of Smash is the adaptation of the board game King Of Tokyo in a Smash Bros style. The goal is to be the last character standing in the Final Destination. The game is made for Android.',
    technologies: [
      technologies.Android,
      technologies.Kotlin,
      technologies.Figma,
    ],
    image: kosImg,
    github: 'https://github.com/SmashedPotatoes/king-of-smash',
  },
  {
    title: 'John McCarthy',
    date: 'November 2022',
    description:
      'Using Azure Cognitive & Vision AI Services, John McCarthy is a trained AI that can detect tumor from MRI scans. John McCarthy tells you if you tumor is benign or malignant given the tumor diameter and your age.',
    technologies: [
      technologies.AzureML,
      technologies.AzureDataFactory,
      technologies.CustomVision,
      technologies.React,
    ],
    image: johnMcCarthyImg,
  },
  {
    title: 'TripNJoy Back Office',
    date: 'August 2022 - September 2022',
    description:
      'Back Office of the mobile app TripNJoy. This application is made in TypeScript using React.js and Next.js',
    technologies: [
      technologies.TypeScript,
      technologies.React,
      technologies.Next,
    ],
    image: tripnjoyboImg,
  },
  {
    title: 'Phoenix Bot',
    date: 'July 2022',
    description:
      "Devops implementation for a discord bot called 'Phoenix-bot'.\nImplementation of the DockerFile, CircleCi, Sentry and SonarCloud, and their integration with discord webhook.",
    technologies: [
      technologies.Docker,
      technologies.CircleCI,
      technologies.Sentry,
      technologies.SonarCloud,
    ],
    image: devopsImg,
    github: 'https://github.com/GabRayz/Phoenix-Bot',
  },
  {
    title: 'SEO',
    date: 'July 2022',
    description:
      'The SEO python app analyzes the web page given an URL and gives many tips for a better SEO.',
    technologies: [technologies.Python],
    image: seoImg,
  },
  {
    title: 'Bootstrap-vue',
    date: 'June 2022',
    description:
      'Implementation of 8 bootstrap components in Vue3 using Composition API.\nThe idea is to understand how to build a component library (design system).',
    technologies: [technologies.Vue],
    image: bootstrapVueImg,
  },
  {
    title: 'SOCRUD',
    date: 'May 2022',
    description:
      'SOCRUD is a REST API made in Java Spring Boot. The goal of this project is to make a project following the software craftmanship and best practices.\n-TDD\n-CICD using CircleCI, SonarCloud and GitHub Action\n-Design Pattern (builder and template)',
    technologies: [technologies.SpringBoot],
    image: tddImg,
  },
  {
    title: 'Future',
    date: 'April 2022',
    description:
      'Future is a job search webapp made in .NET MVC. It allows you to search for a job and apply for it.',
    technologies: [technologies.NET, technologies.CSharp],
    image: netImg,
  },
  {
    title: 'Device Fingerprint',
    date: 'September 2021 - January 2021',
    description:
      'Implementation of a authentication gateway using device fingerprint.\nImplementation of two different 2FA methods: \n- TOTP using Authenticator apps \n- SMS or phone call\nWorked on this project during my 5-month internship at Rakuten.',
    technologies: [
      technologies.Java,
      technologies.SpringBoot,
      technologies.React,
      technologies.Next,
      technologies.Scala,
    ],
    image: rakutenImg,
  },
  {
    title: 'JPEG Algorithm',
    date: 'June 2021',
    description:
      'JPEG compression and decompression algorithm in RGB and YUV color space. \n Downsampling 4:4:4, 4:2:2 & 4:2:0 in YUV color space.',
    technologies: [
      technologies.Python,
      technologies.Numpy,
      technologies.Scipy,
      technologies.Skimage,
      technologies.Matplotlib,
      technologies.Jupyter,
    ],
    image: jpegImg,
    github: 'https://github.com/3outeille/jpeg-algorithm',
  },
  {
    title: 'ERO',
    date: 'June 2021',
    description:
      'Objective: Optimise the route of snow removers in Montréal.\nTheorising through a graph problem (Chinese postman problem/Route inspection problem) then application on real scale and proposal of a cost model.',
    technologies: [
      technologies.Python,
      technologies.Numpy,
      technologies.Osmnx,
      technologies.NetworkX,
      technologies.Jupyter,
    ],
    image: eroImg,
    github: 'https://github.com/3outeille/operational-research-project',
  },
  {
    title: 'js-chat',
    date: 'May 2021',
    description:
      'In my learning of React, I made js-chat. It is a small chat app using firebase and google authentication.\nUse of React hooks.',
    technologies: [
      technologies.React,
      technologies.Firebase,
      technologies.Bootstrap,
    ],
    image: jsChatImg,
    github: 'https://github.com/TonyHg/js-chat/',
  },
  {
    title: 'pizza-creator',
    date: 'March 2021',
    description:
      'In my learning of React, I made pizza-creator. It simulates a pizza making process.\nUse of React hooks.',
    technologies: [
      technologies.React,
      technologies.Sass,
      technologies.Bootstrap,
    ],
    image: pizzaImg,
    github: 'https://github.com/TonyHg/pizza-creator/',
    url: 'https://tonyhg.github.io/pizza-creator/',
  },
  {
    title: 'Java WebService',
    date: 'March 2021',
    description:
      'Implementation multiple REST endpoints in order for external applications to communicate with the backend.\nUse of an Layered Architecture (Controllers/Services/Repositories).\n4 days project. ',
    technologies: [
      technologies.Java,
      technologies.SparkJava,
      technologies.Jooq,
    ],
    image: miniProjectImg,
  },
  {
    title: 'js-calculator',
    date: 'March 2021',
    description:
      'js-calculator is a small web app made in React.\nProject made in less than 2 hours. ',
    technologies: [
      technologies.React,
      technologies.Sass,
      technologies.Bootstrap,
    ],
    image: calculatorImg,
    github: 'https://github.com/TonyHg/js-calculator/',
  },
  {
    title: 'Librubik',
    date: 'January 2021',
    description:
      "Librubik is a rubik's cube solver made in C++.\nIt can solve the 2 first layers using F2L solver step,\nThen use OLL and PLL solver step to solve the last layer.\nProject made in a 1 day rush. ",
    technologies: [technologies.Cpp],
    image: rubikImg,
  },
  {
    title: 'MarioKartTracker',
    date: 'January 2021',
    description:
      'MarioKartTracker displays the rankings and the game history of the MarioKart game.\nIt has an interface to add races.\nTool made for Web (100% responsive) & Android. ',
    technologies: [
      technologies.Android,
      technologies.Kotlin,
      technologies.Angular,
      technologies.TypeScript,
    ],
    image: marioImg,
    github: 'https://github.com/TonyHg/MarioKartTracker/',
  },
  {
    title: 'Libstream & Minimake & Myfind & Mymalloc',
    date: 'November 2020',
    description:
      'Development of four weekly projects in C.\nLibstream: implementation of a stream library.\nMinimake: reimplementation of the Unix make command.\nMyFind: reimplementation of the Unix Find command.\nMyMalloc: reimplementation of the malloc command of the C language (Using mmap). ',
    technologies: [technologies.C],
    image: miniProjectImg,
  },
  {
    title: 'Séraphin Contract Management',
    date: 'August 2020',
    description:
      'SCM is an optimized contract negotiation solution.\nGiven tasks: convert an pdf into an editable HTML text, some Front-End integration. ',
    technologies: [
      technologies.NET,
      technologies.Javascript,
      technologies.Aspose,
    ],
    image: scmImg,
  },
  {
    title: 'Simon Drive',
    date: 'August 2020',
    description:
      "Simon drive is a B2B SaaS to manage a company's associates\nGiven tasks: Front-End integration, binding data models using knockout.js.",
    technologies: [
      technologies.Html,
      technologies.Css,
      technologies.Javascript,
      technologies.NET,
      technologies.Knockout,
      technologies.Ssms,
      technologies.Ajax,
    ],
    image: simonImg,
  },
]
