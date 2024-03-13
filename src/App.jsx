
import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Bookmarks from './components/Book-marks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [reading, setReading] = useState(0);

  const handleAddToBookMark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time =>{
    // console.log('mark read', time)
    const newReadingtime = reading + time;
    setReading(newReadingtime)
    // console.log(setReading)
  }

  return (
    <>
    
     <Header></Header>
     <div className='md:flex max-w-5xl mx-auto'>
     <Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookMark={handleAddToBookMark}></Blog>
     <Bookmarks reading={reading} bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
