import Image from 'next/image'
import Link from 'next/link'
import profileImage from '../../../public/images/도비이즈프리.png'

export default function Hero() {
  return (
    <section className='text-center'>
      <Image
        className='rounded-full mx-auto'
        src={profileImage}
        alt='Profile Image'
        width={250}
        height={250}
        priority
      />
      <h2 className='text-3xl font-bold mt-3'>{"Hi, i'm Ea Jung"}</h2>
      <h3 className='text-xl font-semibold'>Front-end Engineer</h3>
      <p>즐겁게 코딩하는 개발자 입니다.</p>
      <Link href='/contact'>
        <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-3'>
          Contact me
        </button>
      </Link>
    </section>
  )
}
