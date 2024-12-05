import HeroBanner from "../HeroBanner"
import MidBanner from "../MidBanner"
import MultiBanner from "../MultiBanner"
import NewCollection from "../NewCollection"
import TopSellers from "../TopSellers"

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <MultiBanner/>
      <NewCollection/>
      <MidBanner/>
      <TopSellers/>
    </>
  )
}

export default Home