import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaRegUserCircle } from "react-icons/fa";

import UserInfoModal from "../UserInfoModal";

import "./UserInfo.scss";

const UserInfo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalInfo = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModalInfo = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <IconContext.Provider
        value={{ className: "user-info-global", size: "20px" }}
      >
        <button onClick={openModalInfo} className="user-info-button">
          <FaRegUserCircle />
        </button>
      </IconContext.Provider>
      {modalIsOpen ? <UserInfoModal closeModal={closeModalInfo} /> : <></>}
    </>
  );
};

export default UserInfo;
