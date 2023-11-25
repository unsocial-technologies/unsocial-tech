import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navabar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Project'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>UnSocial Tech</title>
        <meta name="google-site-verification" content="_RO2jxAuVmRsvkV46PZvmDhEBQe2FaHiMvQIsqZdWTc" />
        <meta name="UnSocial Tech" content="We are best in business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
