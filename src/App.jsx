import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header'
import HomePage from './Mainpages/Homepage';
import PatientDetails from './Mainpages/PatientDetails';
function App() {
  const [count, setCount] = useState(0)

  return (
//     <>
//  <Header/>


//     </>
<>
<Router>
<div>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/patient-details" element={<PatientDetails />} />
    {/* Add more routes as needed */}
  </Routes>
</div>
</Router>
</>
  )
}

export default App
