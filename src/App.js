
import React, { useEffect, useState } from 'react'

const App = () => {
  const [value,setValue] = useState([])
  useEffect(() => {
    const getHello = async() => {
      const response = await fetch("https://majestic-daifuku-5be413.netlify.app/")
      const data = await response.json();
      setValue(data)
    }
    getHello()
  },[])
  console.log(value.message)
  return (
    <div>{value.message}</div>
  )
}

export default App