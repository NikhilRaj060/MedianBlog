import { Button } from '@nextui-org/button'
import HomePageTopPoster from './component/topPoster/HomePageTopPoster'
import FeaturedPost from './component/featuredPost/FeaturedPost'
import DicoverMoreTopicsHomePage from './component/discoveMoreTopics/DiscoverMoreTopicsOnHome'
import TrendingPost from './component/trendingPost/TrendingPost'

function MainPage() {
  return (
    <main className=''>
      <HomePageTopPoster />
      <FeaturedPost/>
      <DicoverMoreTopicsHomePage/>
      <TrendingPost/>
    </main>

  )
}

export default MainPage

