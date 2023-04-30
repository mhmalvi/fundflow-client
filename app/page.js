import { Inter } from 'next/font/google'
import LandingPage from './LandingLayout'
import Footer from './shared/footer'
import NavbarWhite from './shared/navbarWhite'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavbarWhite/>
    <LandingPage/>
    <Footer/>
    </>
  )
}
