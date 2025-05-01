import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Context } from './context/Context'
import UserInfo from './user-info/User-info'

function App() {

  const [prevPrompts, setPrevPrompts] = useState([])
  const [recentPromt, setRecentPrompt] = useState("")
  const [openUserInfo, setOpenUserInfo] = useState(false)


  return (
    <>
      <Sidebar setPrevPrompts={setPrevPrompts} prevPrompts={prevPrompts}/>
      <Main openUserInfo={openUserInfo} setOpenUserInfo={setOpenUserInfo} setPrevPrompts={setPrevPrompts} recentPromt={recentPromt} setRecentPrompt={setRecentPrompt}/>
      <UserInfo openUserInfo={openUserInfo} setOpenUserInfo={setOpenUserInfo}/>
    </>
  )
}

export default App
