import Image from 'next/image'
import {
  environnmentArts,
  portraitArts,
  vectorArts,
} from '../../common/gallery'
import galleryImg from '../../public/img/gallery/gallery.jpg'
import { GalleryCategory } from './gallery-category'

export const Gallery: React.FC = () => {
  return (
    <>
      <div className="md:çontainer mx-auto mb-24 flex flex-col items-center justify-center">
        <div className="title">Gallery</div>
        <div>
          <Image src={galleryImg} height={400} width={400} alt="gallery-image" />
        </div>
        <GalleryCategory category="Vector Arts" images={vectorArts} />
        <GalleryCategory
          category="Environnement Arts"
          images={environnmentArts}
        />
        <GalleryCategory category="Portrait" images={portraitArts} />
      </div>
    </>
  )
}
