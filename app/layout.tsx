import './globals.css'
import SideNavigation from './SiteNavigation'
import TopNavigation from './TopNavigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 text-zinc-200'>
        <div  className='flex flex-col   h-screen'>
         <TopNavigation />
        <div className='flex   flex-1 '>
          <SideNavigation />
             {children}
        </div>
        </div>
        </body>
    </html>
  )
}
