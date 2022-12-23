import React from 'react'
import logo from './logo.svg'
import { ThemeProvider, TaskBar, List } from '@react95/core'
import { GlobalStyle, DarkStyle } from './misc/GlobalStyle'
import Desktop from './components/Desktop'

export default function App () {
  return (
    <div className="App">
<Desktop/>
    </div>
  )
}
