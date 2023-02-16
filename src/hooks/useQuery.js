import React, { useEffect, useState } from 'react'

function useQuery(callbackPromise, dependencies) {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [paginate,setPaginate] = useState({})
    const [error,setError] = useState('')
    useEffect(() => {
        setLoading(true)
        callbackPromise()
        .then(res => 
            {
                setData(res.data)    
                setPaginate(res.paginate || {})
            }
        )
        .catch(error => 
            setError(error)
        )
        .finally(() =>
            setLoading(false)
        )
    }, dependencies)
  return {
    data, loading, error, paginate
  }
}

export default useQuery