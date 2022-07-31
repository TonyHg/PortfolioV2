import ScrollAnimation from 'react-animate-on-scroll'

export const Ending: React.FC = () => {
  return (
    <div className="mx-auto mb-16 overflow-hidden p-5 text-right text-2xl font-bold text-primary dark:text-dark-primary md:container md:text-3xl">
      <ScrollAnimation animateIn="fadeInRight">
        You have reached the end!
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" delay={150}>
        I hope you enjoyed looking at my{' '}
        <span className="text-secondary">portfolio</span>.
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" delay={300}>
        Have a nice day!
      </ScrollAnimation>
    </div>
  )
}
