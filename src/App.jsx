import { useState } from 'react'
import './App.css'
import Comments from './components/comments/comments'
import {commentData} from './data/commentData'

function App() {
const [nested,setNested]=useState(commentData)
const addCommentsHandler = (commentId,comment)=>{
  console.log(commentId,comment,"hello")
}

  return (
    <div className="App">
      <Comments key={nested.id} nested={nested} addCommentsHandler={addCommentsHandler}/>
    </div>
  )
}

export default App
