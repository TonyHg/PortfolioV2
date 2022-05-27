import Image from 'next/image'
import aboutMeImg from '../../public/img/about.png'

export const AboutMe: React.FC = () => {
  return (
    <div className="mb-32">
      <div className="çontainer mx-auto flex flex-col items-center justify-center">
        <div className="title">ABOUT ME</div>
        <div className="flex flex-row items-center justify-center">
          <div className="flex w-2/5 flex-col p-10 text-left">
            <div className="whitespace-normal p-5 text-xl">
              Fond of computer sciences and new technologies, I am an ambitious
              and tenacious person who likes to succeed. Currently 5th year
              student at{' '}
              <span className="text-secondary">
                EPITA : Ecole d'Ingénieur en Informatique
              </span>
              , an engineering school based in Paris. <br />
              <br />I am looking for an end-of-study intership in{' '}
              <span className="text-secondary">software engineering</span>.
            </div>
          </div>
          <div className="flex w-2/5">
            <Image src={aboutMeImg} className="m-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
