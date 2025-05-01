import React from "react";
import './User-info.css'

const UserInfo = ({openUserInfo, setOpenUserInfo}) => {
    return (
        <div className={openUserInfo ? "user-info open" : "user-info"}>
            <i class="fa-solid fa-xmark"></i>
        </div>
    )
}


export default UserInfo;