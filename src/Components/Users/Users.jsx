import React from "react";
import s from "./users.module.css";
import userImg from './../../Assets/Img/user-def.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from "../../api/api";

let Users = (props) =>{
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        if(i<10)
            pages.push(i);
    }

    return(
        <div>
           
            {
                props.users.map(u=> <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}><img src={u.photos.small ? u.photos.small : userImg} className={s.userPhoto}/></NavLink>
                        </div>
                        <div>
                            {
                                u.followed 
                                    ? <button 
                                    disabled = {props.isFollowingProgress.some(id => id === u.id )}
                                    onClick={
                                        ()=>{
                                            props.unFollow(u.id);
                                        }
                                    }
                                   
                                    >Unfollow</button>
                                    : <button
                                    disabled = {props.isFollowingProgress.some(id => id === u.id )}

                                    onClick={
                                        ()=>{
                                            props.follow(u.id);
                                        }
                                        }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
             <div className={s.paginations}>
                {pages.map( p=>{
                    return <span key={p} className={props.currentPage === p ? s.selecedPage : ''} onClick = {()=>{props.onPageChanged(p)}}>{p}</span> })
                }
                
            </div>
        </div>
    );
}

export default Users;