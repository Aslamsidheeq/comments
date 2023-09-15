import { useState } from 'react'
import {commentData} from './data/commentData'
import Comments from './components/comments/comments'
import useFunction from './useFunction'
import './App.css'

function App() {
const [nested,setNested]=useState(commentData)
const {addComment,deleteComment} = useFunction();

const addCommentsHandler = (commentId,comment)=>{
  const updatedTree = addComment(nested,commentId,comment)
  setNested(updatedTree)
}
const deleteCommentHandler = (commentId) =>{
  const updatedTree = deleteComment(nested,commentId)
  setNested(updatedTree)
}
  return (
    <div className="App">
      <Comments key={nested.id} nested={nested} addCommentsHandler={addCommentsHandler} deleteCommentHandler={deleteCommentHandler}/>
    </div>
  )
}

export default App
