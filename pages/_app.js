import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <Img 
      src="imgs/IMG_0780.jpeg"
      alt="proPic" 
      rel="proPic"
      type="image"
      />
      <Component {...pageProps} />
    </>
  )
}
