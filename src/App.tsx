import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/home/Home'
import Genres from './pages/genres/Genres'
import Detail from './pages/detail/Detail'
import Intro from './pages/intro/Intro'

export const BASE_URL = 'https://api.themoviedb.org/3/';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Intro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/detail' element={<Detail />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
