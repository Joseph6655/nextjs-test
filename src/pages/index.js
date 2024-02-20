import Head from 'next/head'
import Banner from '@/comps/Banner'
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'

export default function Home() {
  return (
     
      <div>
     
       <Navbar/>
       <Head>
         <title> Home page</title>
        
       </Head>

     
       <Banner/>
       <div><p>hellooo </p></div>
       <Footer/>
      </div>
    
  )
}