import { useState } from 'react';
import './App.css'
import Header from './components/Header.tsx'
import CategHeader from './components/CategHeader.tsx'
import MainBody from './components/MainBody.tsx'
function App() {

  return (
      <>
          <html>
              <header>
                <Header></Header>
              </header>
              <body>
                <CategHeader categName="News" categDesc= "Serving all sectors of the Ateneo, News chronicles and reports the truth behind campus issues and events. News ensures vigilance through informative and critical newsworthy stories with quality, credibility, and ethics at its core."></CategHeader>
                <MainBody></MainBody>
              </body>
          </html>
      </>
  )
}

export default App
