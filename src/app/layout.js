import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Publish Support — Software & Publishing Solutions',
  description: 'Publish Support offers expert software development and publishing support services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/master_logo_1024.png"/>
        <link rel="shortcut icon" type="image/png" href="/master_logo_1024.png"/>
        <link rel="apple-touch-icon" href="/master_logo_1024.png"/>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
