import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import BodyPartLibrary from './pages/BodyPartLibrary/BodyPartLibrary'
import ExerciseLibrary from './pages/ExerciseLibrary/ExerciseLibrary'
import ExerciseDetails from './pages/ExerciseDetails/ExerciseDetails'
import ProgramPage from './pages/ProgramPage/ProgramPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useState } from 'react'


function App() {

  const [programData, setProgramData] = useState([])

  return(
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage setProgramData={setProgramData} />} />
        <Route path='/body' element={<BodyPartLibrary />} />
        <Route path='/body/:id/exercises' element={<ExerciseLibrary />} />
        <Route path='/exercises/:id' element={<ExerciseDetails programData={programData} />} />
        <Route path='/program' element={<ProgramPage programData={programData} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>

  )


}

export default App
