import '../globals.css'

export const metadata = {
  title: 'stories-Crowd Funding',
  description: 'Crowd Funding - Quadque',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
