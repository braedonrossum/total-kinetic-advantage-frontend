import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import BodyPartLibrary from './pages/BodyPartLibrary/BodyPartLibrary'
import ExerciseLibrary from './pages/ExerciseLibrary/ExerciseLibrary'
import ExerciseDetails from './pages/ExerciseDetails/ExerciseDetails'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {

  return(
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/body' element={<BodyPartLibrary />} />
        <Route path='/body/:id/exercises' element={<ExerciseLibrary />} />
        <Route path='/:id/exercises' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>

  )


}

export default App
