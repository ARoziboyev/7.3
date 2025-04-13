import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


export function useFetch(url) {

    const [data, setData]=useState(null)
    const [isPending, setIsPending]=useState(false)
    const [error,setError]=useState(false)
  
  useEffect(()=>{
    const fetchData = async()=>{
     const req = await axios('https://dummyjson.com/product')
      
    }


    fetchData()
  },[])
  
  
    return {data,isPending,error}
}
