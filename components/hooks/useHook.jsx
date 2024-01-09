import React, { useState } from 'react'

const useCount = () => {
    const [count,setCount] = useState(0)
   function Increment(){
      setCount(count=>{
        return count+1;
      })
   }
   function Decrement(){
    setCount(count=>{
      return count-1;
    })
 }
  return [count,Increment,Decrement]
}

export default useCount
