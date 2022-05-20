import type { NextPage } from 'next'
import { Navbar } from '../components/navbar/navbar'

const Home: NextPage = () => {
  return (
    <div className="root">
      <Navbar />
    </div>
  )
}

export default Home
