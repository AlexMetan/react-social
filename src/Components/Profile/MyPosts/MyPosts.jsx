import React from 'react';
import AddPostForm from './AddPostForm/AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = props => {
    let postElements = props.posts.map( (p,id) => <Post message={p.message} likes={p.likesCount}  key={id}/>);

    let onAddPost = formData =>{
       props.addPost(formData.postBody);
    }
    return(
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;