import './globals.css'
import { Inter, Quicksand } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Wendy Baqué | Portfolio',
  description: 'Portfolio de Wendy Baqué, développeuse web freelance et no code friendly !',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
