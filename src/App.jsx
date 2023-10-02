import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import InstallPage from './pages/InstallPage'
import FilePage from './pages/FilePage'

function App() {

  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/video' element={<VideoPage />} />
      <Route path='/install' element={<InstallPage />} />
      <Route path='/file' element={<FilePage />} />
    </Routes>
  )
}

export default App
