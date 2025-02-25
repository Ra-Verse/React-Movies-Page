import './css/App.css'
import Favorites from './Pages/Favorites'
import Home from "./Pages/home"
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import { MovieProvider } from './css/contexts/MovieContexts'

function App() {

  return ( 
    <div>
      <MovieProvider>
        <NavBar/>
        <main className='main-content'>
          <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/favorites" element = {<Favorites />}/>
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}

export default App
