import type { NextPage } from 'next'
import { Layout } from '../components/common/layout'
import { ResumeViewer } from '../components/resume/resume'

const Resume: NextPage = () => {
  return (
    <Layout>
      <ResumeViewer />
    </Layout>
  )
}

export default Resume
