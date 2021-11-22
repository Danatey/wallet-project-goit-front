import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import "./UserInfoModal.scss";

const UserInfoModal = ({ closeModal }) => {
  const user = useSelector(authSelectors.getUser);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <div className="user-info-modal-container">
        <div className="user-info-modal-list">
          <h3>Ваша карточка</h3>
          <ul>
            {user !== null ? (
              <>
                <li>
                  {/* User name */}
                  {user.name !== null ? <p>Ваш логин: {user.name}</p> : <></>}
                </li>
                <li>
                  {/* User email */}
                  {user.email !== null ? <p>Ваш email: {user.email}</p> : <></>}
                </li>
                <li>
                  {/* User balance */}
                  {user.balance !== null ? (
                    <p>Ваш баланс: ₴ {user.balance}</p>
                  ) : (
                    <></>
                  )}
                </li>
              </>
            ) : (
              <li>
                <p>О вас нет информации</p>
              </li>
            )}
          </ul>
          <button onClick={closeModal} className="user-info-modal-close">
            Закрыть
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInfoModal;
