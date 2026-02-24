import React from 'react'
import Card from './component/Card'
const App = () => {
     return (
    <div className='flex flex-wrap justify-center bg-amber-900 md:bg-blue-500 lg:bg-green-800'>
      <Card />  
      <Card />
      <Card />
      <Card />
      <Card />   
    </div>
  )
}

export default App
