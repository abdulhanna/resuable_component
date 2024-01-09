import React, { useEffect } from 'react'
import { useState } from 'react'
import useCount from '../components/hooks/useHook'
import useFetch from '../components/hooks/useFetch'

const baseUrl= "https://fakestoreapi.com/products"
const Hooks = () => {
    const [count,Increment,Decrement ] = useCount()
    const {error,loading,data} = useFetch(baseUrl)

    useEffect(()=>{
       if(count > 5){
        console.log('dd')
        document.title = 'Reached limit'
       }
    },[count])
    console.log(data,'data')
  return (
    <div className='m-2'>
      <p>Custom Hooks</p>
      <div className='flex gap-2'>
      <button className='bg-green-400 py-1 px-2' onClick={Increment}>Inc</button>
      <p>{count}</p>
      <button className='bg-red-400 py-1 px-2' onClick={Decrement}>Dec</button>
    </div>
    <div>
      {loading && <h2>....loading</h2>}
      {error && <h3>error getting</h3>}

      {data}
    </div>
    </div>
  )
}

function solution (str){
  
  if(str.length == 0) return ""

  return str[str.length-1] + solution(str.slice(0,str.length-1))
}
export default Hooks
