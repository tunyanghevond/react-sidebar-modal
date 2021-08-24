import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./contex";

const Modal = () => {
  const { isModalOpen, closeMoadal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal container</h3>
        <button onClick={closeMoadal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
