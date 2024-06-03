import "./Comment.css";

const Comment = ({comment, username})=> {
    return(
        <div className="Comment">
            <h2>{username}</h2>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;