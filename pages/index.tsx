import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer/footer'
import { Landing } from '../components/landing/landing'
import { Navbar } from '../components/navbar/navbar'
import { MainProjects } from '../components/projects/main-projects'
import { OtherProjects } from '../components/projects/other-projects'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="root">
        <Navbar />
        <Landing />
        <MainProjects />
        <OtherProjects />
        <Footer />
      </div>
    </>
  )
}

export default Home
