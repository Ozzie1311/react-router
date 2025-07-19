import { useState, useEffect } from 'react'
import { getVans } from '../../api'

export function useGetVans() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((json) => {
        setData(json.vans)
        setLoading(false)
      })
      .catch((err) => setError(err.message))
  }, [])

  return { data, loading, error }
}
