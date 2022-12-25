import type { NextPage } from 'next'
import { Layout } from '../components/common/layout'
import { Gallery as GalleryViewer } from '../components/gallery/gallery'
import Head from 'next/head'

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tony Heng - Gallery</title>
      </Head>
      <Layout>
        <GalleryViewer />
      </Layout>
    </>
  )
}

export default Gallery
