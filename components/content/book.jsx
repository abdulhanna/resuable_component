import React from 'react'

const DB = {
    books:[
        {id:1,title:'The Hobbit',author:"Gladwel",pages_count:397},
        {id:2,title:'Harry Potter and the Philosopher\'s Stone',author:"J.K. Rowling"},
    ],
    songs:[
        {id:1,name:'YMCA',artist:'Beatles'},
        {id:2,name:'Bohemian Rhapsody',artist:'Queen'}
    ]
}

const Book = ({books}) => {
  return (
    <div className='flex flex-col justify-center  items-center'>
          <h2>Books</h2>
         <ul> {books.map((book,index)=>{
             return <li key={index}>{`Book: ${book.title}  / Author: ${book.author}`}</li>
          })}</ul>
      </div>
  )
}

export const Songs = ({songs})=>{
    return (
        <div className='flex flex-col justify-center  items-center'>
        <h2>Songs</h2>
        <ul> {songs.map((song,index)=>{
            return <li key={index}>{`Song: ${song.name}  / Artist :${song.artist}`}</li>
        })}</ul>
      </div> 
    )
}

const WithHoc =  (Component,getData,theme)=>{
     return (props)=>(
        <div className={props.theme}>
            <Component {...getData(props.name)}></Component>
        </div>
     )
}

export const BookHoc = WithHoc(Book,(name)=>({[name]:DB[name]}))
export const SongHoc = WithHoc(Songs,(name)=>({[name]:DB[name]}))   

export default Book
