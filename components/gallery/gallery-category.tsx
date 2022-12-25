import { Art } from '../../common/types'
import { GalleryItem } from './gallery-item'

import LightGallery from 'lightgallery/react'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

interface GalleryCategoryProps {
  category: string
  images: Art[]
}

export const GalleryCategory: React.FC<GalleryCategoryProps> = ({
  category,
  images,
}: GalleryCategoryProps) => {
  return (
    <>
      <div className="pt-5 md:container">
        <div className="w-full text-center text-lg">{category}</div>
        <LightGallery elementClassNames="justify-around flex flex-wrap p-10">
          {images.map((image, idx) => (
            <GalleryItem image={image} key={`${category}-${idx}`} />
          ))}
        </LightGallery>
      </div>
    </>
  )
}
