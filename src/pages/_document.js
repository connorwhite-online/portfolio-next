import { Html, Head, Main, NextScript } from 'next/document'
import Menu from './menu'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{margin: 0, padding: 0}}>
        <Menu />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
