import { useState } from "react";
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Courses from "./Components/Courses/Courses"
import Header from "./Components/Header/Header"


export const totalCredits = 12;

function App() {


  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = course => {
    const credits = bookmarks.reduce((p, c) => p+c.credit,0)
    if(credits+course.credit > totalCredits){
     return  alert("You cannot add more than " + totalCredits + " credits")
    }

    const alreadyBookmarked = bookmarks.find(bookmarks => bookmarks.id === course.id);
    if (!alreadyBookmarked) setBookmarks([...bookmarks, course]);

  }

  return (
    <>
      <div className="container mx-auto px-4">
      <Header></Header>
      <div className="flex justify-around">
        <Courses handleAddToBookmarks={handleAddToBookmarks}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      </div>
    </>
  )
}

export default App
