import type { NextPage } from 'next'
import { Layout } from '../components/common/layout'
import { Gallery as GalleryViewer } from '../components/gallery/gallery'

const Gallery: NextPage = () => {
  return (
    <Layout>
      <GalleryViewer />
    </Layout>
  )
}

export default Gallery
