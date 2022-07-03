import Image from 'next/image'
import { Art } from '../../common/types'

interface GalleryItemProps {
  image: Art
}

export const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
}: GalleryItemProps) => {
  return (
    <>
      <a className="h-60 w-60" data-src={image.src} data-lg-size="1406-1390">
        <img
          className="h-full w-full rounded object-cover"
          src={image.src}
          width={250}
          height={250}
        />
      </a>
    </>
  )
}
