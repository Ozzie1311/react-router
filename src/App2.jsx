import { useState, useEffect } from 'react'

export const App2 = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vans')
        if (!response.ok) {
          throw new Error('Error')
        }
        const json = await response.json()
        console.log(json.vans)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])

  console.log(data)

  return <h1>Esta es la app de prueba 2</h1>
}
