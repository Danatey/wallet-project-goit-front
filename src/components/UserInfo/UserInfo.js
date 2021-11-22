import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { FaRegUserCircle } from "react-icons/fa";

import UserInfoModal from "../UserInfoModal";

import "./UserInfo.scss";

const UserInfo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const userName = useSelector((state) => state.auth.user.name);

  const openModalInfo = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModalInfo = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="user-info-container">
      <IconContext.Provider
        value={{ className: "user-info-global", size: "20px" }}
      >
        <button onClick={openModalInfo} className="user-info-button">
          <FaRegUserCircle />
          <span className="Header__username">{userName}</span>
        </button>
      </IconContext.Provider>
      {modalIsOpen ? <UserInfoModal closeModal={closeModalInfo} /> : <></>}
    </div>
  );
};

export default UserInfo;
