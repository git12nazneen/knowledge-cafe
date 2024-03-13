
import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Bookmarks from './components/Book-marks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookMark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
    
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto'>
     <Blog handleAddToBookMark={handleAddToBookMark}></Blog>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
