import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Context } from './context/Context'

function App() {

  const [prevPrompts, setPrevPrompts] = useState([])
  const [recentPromt, setRecentPrompt] = useState("")


  return (
    <>
      <Sidebar setPrevPrompts={setPrevPrompts} prevPrompts={prevPrompts}/>
      <Main setPrevPrompts={setPrevPrompts} recentPromt={recentPromt} setRecentPrompt={setRecentPrompt}/>
    </>
  )
}

export default App
