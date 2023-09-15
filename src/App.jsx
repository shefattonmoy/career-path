import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import JobCategory from './components/JobCategory/JobCategory'
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs'
import Statistics from './components/Statistics/Statistics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
      <Statistics></Statistics>
    </div>
  )
}

export default App
