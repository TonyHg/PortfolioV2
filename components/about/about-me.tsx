import Image from 'next/image'
import aboutMeImg from '../../public/img/about.png'

export const AboutMe: React.FC = () => {
  return (
    <div className="mb-32">
      <div className="md:çontainer mx-auto flex flex-col items-center justify-center">
        <div className="title">ABOUT ME</div>
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="flex flex-col text-left md:w-2/5 md:p-10">
            <div className="whitespace-normal p-5 text-xl">
              Fond of computer sciences and new technologies, I am an ambitious
              and tenacious person who likes to succeed.
              <br />
              <br />
              Currently 5th year student at{' '}
              <span className="text-secondary">
                EPITA : Ecole d&apos;Ingénieur en Informatique
              </span>
              , an engineering school based in Paris.
              <br />I am looking for an end-of-study internship in{' '}
              <span className="text-secondary">software engineering</span>.
            </div>
          </div>
          <div className="flex p-5 md:w-2/5 md:p-0">
            <Image src={aboutMeImg} className="m-auto" alt="tony-about-me-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
