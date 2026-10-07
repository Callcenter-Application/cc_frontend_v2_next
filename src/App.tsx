// import { useState } from 'react'
import { MainHeader } from "./views/header.view";
import { SideBar } from "./views/sideBar.view";
import { MainContent } from "./views/mainContent.view";

function App() {


  return (
    <div className="container">
      <SideBar/>
      <div>
        <MainHeader/>
        <MainContent/>
      </div>
    </div>
  )
}

export default App


