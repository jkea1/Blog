import Link from 'next/link'
import FeaturedPosts from './components/FeaturedPosts'
import Hero from './components/Hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Link href='/map'>MAP</Link>
      <FeaturedPosts />
    </>
  )
}
