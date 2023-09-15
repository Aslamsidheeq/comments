import { useState } from 'react';
import './comments.css'

const Comments = ({nested,addCommentsHandler}) => {
  const[showInput,setShowInput]=useState(false)
  const [commentBody,setCommentBody] = useState("");

  const addComments=() => {
    let newNested= {
      id:Date.now(),
      text:commentBody,
      replies:[]
    }
    addCommentsHandler(nested.id,newNested)
    setShowInput(false)
  }
    return (
      <>
        <div className="comment-container">
          <h3>{nested.text}</h3>
          <div>
            {showInput && <input type='text' autoFocus onChange={(e)=>setCommentBody(e.target.value)}/>}
            {showInput?(
              <div>
                <button onClick={addComments}>Add</button>
                <button onClick={()=>setShowInput(false)}>Cancel</button>
              </div>
            ):(
            <div>
              <button onClick={()=>setShowInput(true)}>Reply</button>
              <button>Delete</button>
            </div>
            )}
        </div>
        </div>
                <div style={{paddingLeft: 25}}>
                {nested?.replies?.map((ele)=>(
                  <Comments 
                  key={ele.id} 
                  nested={ele}
                  addCommentsHandler={addCommentsHandler}/>
                ))}
              </div>
      </>
    );
  };
  
  export default Comments;