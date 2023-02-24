import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name:"카리나",
        comment:"안녕하세요,카리나입니다."
    },
    {
        name:"윈터",
        comment:"안녕하세요, 윈터입니다.",
    },
    {
        name:"지젤",
        comment:"안녕하세요, 지젤입니다.",
    },
    {    
        name:"닝닝",
        comment:"안녕하세요, 닝닝입니다."
    },
]


function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    );
}

export default CommentList;