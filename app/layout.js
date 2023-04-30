import { Providers } from '../redux/provider'
import './globals.css'

export const metadata = {
  title: 'Crowd Funding-Quadque',
  description: 'Crowd Funding - Quadque',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
