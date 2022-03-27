import React from 'react';
import { connect } from 'react-redux';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



let mapStateToProps = state =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps,{addPost:addPostAC,updateNewPostText:updateNewPostTextAC})(MyPosts);

export default MyPostsContainer;