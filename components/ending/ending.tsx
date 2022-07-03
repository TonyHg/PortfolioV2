import ScrollAnimation from 'react-animate-on-scroll'

export const Ending: React.FC = () => {
  return (
    <div className="container mx-auto mb-16 text-right text-3xl font-bold text-primary">
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
