import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
    <div className={s.item}>
        <img src="https://alexdev.pl/img/about-me.png" />
        {props.message}
        <div>
            <span>Like {props.likes}</span>
        </div>
    </div>
    );
}

export default Post;