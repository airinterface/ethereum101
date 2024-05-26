import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Ethereum 101',
  description: 'Learning web3',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}