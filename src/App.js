import React from 'react'

import Data from './Data/Data'
import Navbar from './Navbar/Navbar'
import Cases from './Cards/Cases'
import Chart from './Chart/Chart'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Data/>
      <Cases/>
      {/* <Chart/> */}
    </div>
  )
}
