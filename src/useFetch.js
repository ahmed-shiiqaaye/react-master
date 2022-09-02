import axios from 'axios'
import React, {useState, useEffect} from 'react'


function useFetch(url) {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(()=>{
    setLoading(true)
    axios.get(url).then(response =>{
        setData(response.data)
    }).catch((error)=>{
        setError(error)
    }).finally(()=>{
        setLoading(false)
    })
   },[url])
   return {data, loading, error};
}

export default useFetch