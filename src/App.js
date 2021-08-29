import React from 'react'
import Data from './Data/Data'
import Navbar from './Navbar/Navbar'
import Grid from './Grid/Grid'
import Globle from './Globle/Globle'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Data/>
      {/* <Cases/> */}
      <Grid/>
      {/* <Chart/> */}
      <Globle/>
    </div>
  )
}
