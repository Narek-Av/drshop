import React from "react";
import { IUser } from "../../interfaces";

import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { useState } from "react";

type UserInfoProps = {
  logout: () => {};
  user: IUser;
};

const UserInfo: React.FC<UserInfoProps> = ({ logout, user }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const buttonClassNames = `btn arrow-btn${
    showUserInfo ? " arrow-btn-active" : ""
  }`;

  return (
    <div className="user-content">
      <div className="logout-btn">
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="user-content-info">
        <div className="user-icon">
          <UserIcon />
        </div>
        <button
          onClick={() => setShowUserInfo(!showUserInfo)}
          className={buttonClassNames}
        >
          <ArrowDown />
        </button>
        {showUserInfo && <div className="user-details">{user.username}</div>}
      </div>
    </div>
  );
};

export default UserInfo;
