import Desc from "../components/Desc"
import Hero from "../components/Hero"
import Howto from "../components/Howto"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <Howto />
      <Desc />
      <Testimonials />
    </div>
  )
}

export default Home