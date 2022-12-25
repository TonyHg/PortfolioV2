import type { NextPage } from 'next'
import { Layout } from '../components/common/layout'
import { ResumeViewer } from '../components/resume/resume'
import Head from 'next/head'

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tony Heng - Resume</title>
      </Head>
      <Layout>
        <ResumeViewer />
      </Layout>
    </>
  )
}

export default Resume
