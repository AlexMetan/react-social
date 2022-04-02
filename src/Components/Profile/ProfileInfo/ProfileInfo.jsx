import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div >
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.fullName}
            </div>
        </div>
    );
}

export default ProfileInfo;