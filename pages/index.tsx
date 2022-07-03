import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutMe } from '../components/about/about-me'
import { Layout } from '../components/common/layout'
import { Ending } from '../components/ending/ending'
import { Landing } from '../components/landing/landing'
import { MainProjects } from '../components/projects/main-projects'
import { OtherProjects } from '../components/projects/other-projects'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Landing />
        <AboutMe />
        <MainProjects />
        <OtherProjects />
        <Ending />
      </Layout>
    </>
  )
}

export default Home
