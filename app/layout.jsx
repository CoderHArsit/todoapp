import '@styles/globals.css';
// import { Children } from 'react';
import Head from 'next/head';
import Nav from '@components/Nav';
import Provider from '@components/Provider'
import bg from "../public/assets/images/bg.jpg"
import Footer from '@components/Footer';
export const metadata={
    title:"ImplementedIdeas",
    description:"Share Your unique Implemented Ideas.",
    
}

const RootLayout=({children})=>{
    return(
        <html lang='en'>
           
            <body>
                <Provider>           <Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>  <div className='main'>
                <div className='gradient' />
                
            </div>
            <main className='app'>
                <Nav/>
                {children}
                <Footer/>
            </main>
            </Provider>
            
            </body>
            
        </html>
    )
}
export default RootLayout;