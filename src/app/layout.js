import './globals.css'
import { Quicksand } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

const quicksand = Quicksand({ subsets: ['latin'] })


export const metadata = {
  title: 'Wendy Baqué | Portfolio',
  description: 'Portfolio de Wendy Baqué, développeuse web freelance et no code friendly !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      LAYOUT
      <Navbar />
      <body className={quicksand.className}>{children}</body>
      <Footer />
    </html>
  )
}
