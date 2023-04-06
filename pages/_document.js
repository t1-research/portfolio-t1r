import { Html, Head, Main, NextScript } from 'next/document'

import {img} from 'pages/imgs' 
import '../imgs'

export default function Document() {
  const meta = {
    title: 'T1 Research',
    description: 'One page for it all!',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="instagram:card" content="summary_large_image" />
        <meta name="instagram:site" content="@t1.research "/>
        <meta name="instagram:title" content={meta.title}  />
        <meta name="instagram:description" content={meta.description} />
        <meta name="instagram:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
