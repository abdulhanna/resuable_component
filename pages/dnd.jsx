import React, { useState } from 'react'
import SortableList from './sorting'
const Dnd = () => {
    const [data,setData] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
      title:"this is Library titile"
    },
    {
      id: 2,
      text: 'Make it generic enough',
      title:"this is Library titile"
    },
    {
      id: 3,
      text: 'Write README',
      title:"this is Library titile"
    },
    {
      id: 4,
      text: 'Create some examples',
      title:"this is Library titile"
    }, {
            id: 5,
            text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            title:"this is Library titile"
          },
          {
            id: 6,
            text: '???',
            title:"this is Library titile"
          },
          {
            id: 7,
            text: 'PROFIT',
            title:"this is Library titile"
          }
  ])
const CustomListItem = (props)=>{
  const {item} = props
    // console.log(props,'props')
  return(<>
  
    <p className='text-green-500'>{item.text}</p>
    <p className='text-green-600'>{item.title}</p>
  </>)
}

const handleMove=(nodes)=>{
    console.log(nodes,'nodes')
}
  return (
    <div className='mx-4'>
    <h2>this is test sorting package</h2>
       <SortableList  data={data} handleMove={handleMove}/>
    </div>
  )
}

export default Dnd
