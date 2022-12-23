import { useState } from 'react'
import { ThemeProvider } from '@react95/core'
import { GlobalStyle } from '../misc/GlobalStyle'
import BottomNav from './BottomNav'
import About from '../pages/about'

export default function Desktop () {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [showAbout, setShowAbout] = useState<boolean>(true)

  return (
        <div className='bg'>
        <ThemeProvider theme={'millenium'}>
            <GlobalStyle />
            {showAbout && <About closeWindow={() => setShowAbout(false)} width={'32vw'}/>}
            <BottomNav/>
        </ThemeProvider>

        </div>
  )
}
