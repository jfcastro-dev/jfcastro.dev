import { useEffect, useState } from 'react'
import { ThemeProvider } from '@react95/core'
import { GlobalStyle } from '../misc/GlobalStyle'
import BottomNav from './BottomNav'
import About from '../pages/about'
import Resume from '../pages/resume'
import Doom from '../pages/doom'
import Blog from '../pages/blog'

export default function Desktop () {
  const [defaultWidth, setDefaultWidth] = useState<string>('30vw')
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [showAbout, setShowAbout] = useState<boolean>(false)
  const [showResume, setShowResume] = useState<boolean>(false)
  const [showDoom, setShowDoom] = useState<boolean>(false)
  const [showBlog, setShowBlog] = useState<boolean>(false)

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setDefaultWidth('70vw')
      setShowAbout(true)
      setIsMobile(true)
    } else {
      setShowBlog(true)
      setShowAbout(true)
      setShowResume(true)
    }
  }, [])
  return (
        <div>
          <ThemeProvider theme={'millenium'}>
              <GlobalStyle />
              {showAbout && <About closeWindow={() => setShowAbout(false)} x={isMobile ? '15vw' : '4vw'} width={defaultWidth}/>}
              {showDoom && <Doom closeWindow={() => setShowDoom(false)} x={isMobile ? '15vw' : '33vw'} width={'650'}/>}
              {showResume && <Resume closeWindow={() => setShowResume(false)} x={isMobile ? '15vw' : '66vw'} width={defaultWidth}/>}
              {showBlog && <Blog closeWindow={() => setShowBlog(false)} x={isMobile ? '15vw' : '35vw'} width={defaultWidth}/>}
              <BottomNav bio={() => setShowAbout(true)} exp={() => setShowResume(true)} doom={() => setShowDoom(true)} />
          </ThemeProvider>
        </div>
  )
}
