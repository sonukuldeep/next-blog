import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-5 md:px-10 py-5 max-w-7xl mx-auto'>
        <div>
            <Link href="/"><Image src="/assets/images/logo.webp" width={100} height={10} alt="logo"/></Link>
        </div>
        <div><Link href="#" className='bg-gradient-to-r from-indigo-500 to-pink-500 text-white cursor-pointer text-sm border border-primary-400 px-4 py-2 rounded-full'>SignUp for Newsletter</Link></div>
    </header>
  )
}

export default Header