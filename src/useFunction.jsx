//returns an object with single method addComment

const useFunction = ()=>{
    const addComment = (tree,commentId,newComment)=>{
        if(tree.id===commentId){
            tree.replies.unshift(newComment);
            return tree;
        }
        //when if conidition not successfull, then:
        //recursively searching in nested components
        const updatedReplies = tree.replies.map((ele)=> 
            addComment(ele,commentId,newComment))
            return{ ...tree,replies:updatedReplies}
        }
        const deleteComment = (tree,commentId)=>{
            if(tree.id===commentId){
                return tree.replies.filter((ele) =>ele.id !== commentId)
            }
            const updatedReplies = tree.replies.map((ele)=> 
            deleteComment(ele,commentId))
            return{ ...tree,replies:updatedReplies}
        }    
    return {addComment,deleteComment}
            //updated tree is returned as a new object @app.js
}

export default useFunction;