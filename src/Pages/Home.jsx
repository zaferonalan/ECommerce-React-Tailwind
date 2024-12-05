import Features from "../components/Features"
import Footer from "../components/Footer"
import HeroBanner from "../components/HeroBanner"
import MidBanner from "../components/MidBanner"
import MultiBanner from "../components/MultiBanner"
import NewCollection from "../components/NewCollection"
import TopSellers from "../components/TopSellers"

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <MultiBanner/>
      <NewCollection/>
      <MidBanner/>
      <TopSellers/>
      <Features/>
      <Footer/>
    </>
  )
}

export default Home