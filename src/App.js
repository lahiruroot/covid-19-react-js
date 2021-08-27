import React from 'react'

import Data from './Data/Data'
import Navbar from './Navbar/Navbar'
import Cases from './Cards/Cases'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Data/>
      <Cases/>
    </div>
  )
}
