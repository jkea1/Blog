import Link from 'next/link'
import FeaturedPosts from './components/FeaturedPosts'
import Hero from './components/Hero'
import Locations from './components/Locations'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Link href='/map'>MAP</Link>
      <FeaturedPosts />
      <Locations />
    </>
  )
}

// export async function getStaticProps() {
//   /** TODO: 우선은 json 형태로 저장해서 하는데 나중에는 next api routes로 불러와 보자. */
//   const stores = (await import('../../public/stores.json')).default

//   return {
//     props: { stores },
//     revalidate: 60 * 60,
//   }
// }
