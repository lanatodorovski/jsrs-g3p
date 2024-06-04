import { useContext, useRef } from "react";
import { PatternContext } from "../../Context/PatternContext";
import { UserContext } from "../../Context/UserContext";
import Comment from "../Comment/Comment";
import { useNavigate } from "react-router-dom";
import "./CommentSection.css";

const CommentSection = ({pattern}) => {
    const commentInput = useRef(null);
    const {myUser, users} = useContext(UserContext);
    const navigate = useNavigate();
    const {addComment} = useContext(PatternContext);

    const handleDefault = (event) => {
        event.preventDefault();
        if(myUser.id !== 0){
            if(myUser.boughtPatterns.includes(pattern.id)){
                if(commentInput.current.value.trim() == ""){
                    alert("Input field can't be empty");
                }else{
                    addComment(pattern.id, myUser.id, commentInput.current.value);
                    commentInput.current.value = null;
                    navigate(this);
                }
            }else{
                alert("This product has to be bought in order to leave a comment. ");
            }

        }else{
            alert("You have to be logged in to add a comment.");
        }
    }
    return(
        <div className="CommentSection">
            <form onSubmit={handleDefault}>
                <input type="text" placeholder="comment" ref={commentInput}/>
                <button type="submit">Add Comment</button>
            </form>
            <div>
                {pattern.comments.map(comment => <Comment comment={comment.content} username={users.find(user=> user.id === comment.userId).username}/>)}
            </div>
        </div>
    );
}

export default CommentSection;