import React from 'react'
import Book ,{Songs, BookHoc,SongHoc} from '../../components/content/book'

const DB = {
    Books:[
        {id:1,title:'The Hobbit',author:"Gladwel",pages_count:397},
        {id:2,title:'Harry Potter and the Philosopher\'s Stone',author:"J.K. Rowling"},
    ],
    Songs:[
        {id:1,name:'YMCA',artist:'Beatles'},
        {id:2,name:'Bohemian Rhapsody',artist:'Queen'}
    ]
}

const HOC = () => {
  return (
    <div className='flex justify-center flex-col items-center mt-8'>
      HOC 
      <div className='space-y-8'>
        <Book books={DB.Books}/>
        <Songs songs={DB.Songs}/>
        {/* <BookHoc books={DB.Books}></BookHoc> */}
        {/* <SongHoc songs={DB.Songs}></SongHoc> */}
        <BookHoc name="books" theme={'bg-black text-white'}></BookHoc>
        <SongHoc name="songs" theme= 'bg-red-500 text-white'></SongHoc>
      </div>
    </div>
  )
}

export default HOC
