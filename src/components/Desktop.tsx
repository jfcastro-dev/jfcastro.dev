import { useState } from 'react'
import { ThemeProvider } from '@react95/core'
import { GlobalStyle } from '../misc/GlobalStyle'
import BottomNav from './BottomNav'
import About from '../pages/about'
import Resume from '../pages/resume'
import Doom from '../pages/doom'
import Blog from '../pages/blog'

export default function Desktop () {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(true);
  const [showResume, setShowResume] = useState<boolean>(true);
  const [showDoom, setShowDoom] = useState<boolean>(false);
  const [showBlog, setShowBlog] = useState<boolean>(true);

  return (
        <div>
        <ThemeProvider theme={'millenium'}>
            <GlobalStyle />
            {showAbout && <About closeWindow={() => setShowAbout(false)} x={'3vw'} width={'30vw'}/>}
            {showDoom && <Doom closeWindow={() => setShowDoom(false)}  x={'33vw'} width={'650'}/>}
            {showResume && <Resume closeWindow={() => setShowResume(false)}  x={'67vw'} width={'30vw'}/>}
            {showBlog && <Blog closeWindow={() => setShowBlog(false)}  x={'34vw'} width={'32vw'}/>}
            <BottomNav bio={()=>setShowAbout(true)} exp={()=>setShowResume(true)} doom={()=>setShowDoom(true)} />
        </ThemeProvider>

        </div>
  )
}
