import Image from 'next/image'

import ReactTypingEffect from 'react-typing-effect'
import landingImg from '../../public/img/landing.png'

export const Landing: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="absolute top-14 right-0">
        <Image src={landingImg} />
      </div>
      <div className="container mx-auto flex h-full flex-col items-start justify-center">
        <div className="text-5xl font-bold leading-normal">
          Hey!
          <br />
          I&apos;m <span className="text-secondary">Tony</span>.
          <br />I
          <span id="design-title" className="text-secondary">
            {' '}
            design{' '}
          </span>
          and
          <span className="text-secondary"> develop </span>
          <ReactTypingEffect
            text={['websites.', 'apps.', 'softwares.', 'games.', 'things.']}
            eraseDelay={500}
            eraseSpeed={100}
            typingDelay={500}
          />
          <br />
          Welcome to my portfolio!
        </div>
      </div>
    </div>
  )
}
