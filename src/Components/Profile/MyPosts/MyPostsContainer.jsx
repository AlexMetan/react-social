import React from 'react';
import { connect } from 'react-redux';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



let mapStateToProps = state =>{
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps,{addPost:addPostAC})(MyPosts);

export default MyPostsContainer;