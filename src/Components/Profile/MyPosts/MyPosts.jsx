import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer';


const MyPosts = props => {
    
    let postElements = props.posts.map( (p,id) => <Post message={p.message} likes={p.likesCount}  key={id}/>);

    let newPostElement = React.createRef(); 
    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(newText));
    }
    return(
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} value = {props.newPostText } onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;