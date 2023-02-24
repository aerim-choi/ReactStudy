import React from "react";

const styles={
    wrapper:{
        margin:8,
        paddiing:8,
        display:"flex",
        flexDirection:"row",
        border:"1px solid grey",
        borderRadius:16,
    },
    imageContainer:{},
    image:{
        width:50,
        height:50,
        borderRaduis:25,
    },
    contentContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    nameText:{
        color:"black",
        fontSize:16,
        fontWeight:"bold"
    },
    commentText:{
        color:"black",
        fontSize:16,
    }
}

function Comment(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    src="https://e7.pngegg.com/pngimages/1000/665/png-clipart-computer-icons-profile-s-free-angle-sphere.png"
                    style={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>
                    {props.comment}
                </span>
            </div>         
        </div>
    );
}

export default Comment;