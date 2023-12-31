import { useState } from 'react';
import './comments.css'

//lives in app component
const Comments = ({nested,addCommentsHandler,deleteCommentHandler}) => {
  const [showInput,setShowInput] = useState(false)
  const [commentBody,setCommentBody] = useState("");

  const addComments=() => {
    let newNested= {
      id:Date.now(),
      text:commentBody,
      replies:[]
    }
    //updates tree with customHook
    addCommentsHandler(nested.id,newNested)
    setShowInput(false)
  }
    return (
      // two sections : one for rendering cuurent and next for replies
      <>
      {/* using template literals to conditionally add className , if nested.text is true*/}
        <div className={`${nested.text && "comment-container"}`}>
          <h3>{nested.text}</h3>
          <div>
            {showInput && <input type='text' autoFocus onChange={(e)=>setCommentBody(e.target.value)}/>}
            {showInput?(
              <div>
                <button onClick={addComments}>Add</button>
                <button onClick={()=>setShowInput(false)}>Cancel</button>
              </div>
            ):(
                nested.text?(
                  <div>
                  <button onClick={()=>setShowInput(true)}>Reply</button>
                  <button onClick={()=>deleteCommentHandler(nested.id)}>Delete</button>
                </div>
                ):null
            )}
        </div>
        </div>

        <div style={{paddingLeft: 25}}>
          {/* if there are replies, render another instance of same component for each reply */}
          {/* recusrion */}
          {nested?.replies?.map((ele)=>(
            <Comments 
            key={ele.id} 
            nested={ele}
            addCommentsHandler={addCommentsHandler}
            deleteCommentHandler={deleteCommentHandler}/>
          ))}
        </div>
      </>
    );
  };
  
  export default Comments;