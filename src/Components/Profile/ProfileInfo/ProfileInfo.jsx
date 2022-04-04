import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {props.profile.fullName}
                <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;