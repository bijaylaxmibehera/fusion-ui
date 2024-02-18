import { Route, Routes } from 'react-router'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Home } from './pages/Home/Home'
import { Component } from './pages/Component/Component'
import { ButtonDocs } from './documentation/ButtonDocs/ButtonDocs'
import { AvatarDocs } from './documentation/AvatarDocs/AvatarDocs'
import { BadgeDocs } from './documentation/BadgeDocs/BadgeDocs'
import { CardDocs } from './documentation/CardDocs/CardDocs'
import { ImageDocs } from './documentation/ImageDocs/ImageDocs'
import { HeadingDocs } from './documentation/HeadingsDocs/HeadingDocs'
import { AlertDocs } from './documentation/AlertDocs/AlertDocs'
import { TextDoc } from './documentation/TextDocs/TextDocs'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components' element={<Component />}>
            <Route path='/components/avatar' element={<AvatarDocs />} />
            <Route path='/components/alert' element={<AlertDocs/>} />
            <Route path='/components/button' element={<ButtonDocs />} />
            <Route path='/components/badge' element={<BadgeDocs />} />
            <Route path='/components/card' element={<CardDocs />} />
            <Route path='/components/image' element={<ImageDocs />} />
            <Route path='/components/headings' element={<HeadingDocs/>} />
            <Route path='/components/text' element={<TextDoc/>} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
