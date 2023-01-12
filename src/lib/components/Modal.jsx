import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";
import cross from "./assets/cross.svg";

/**
 * Modal component that displays a message and provides a button to close it.
 *
 * @param {boolean} openModal - Indicates whether the modal should be displayed or not.
 * @param {function} closeModal - Function that closes the modal.
 * @param {string} message - Message to be displayed in the modal.
 *
 * @returns {JSX.Element} - Rendered modal element.
 */
const Modal = ({ openModal, closeModal, message }) => {
  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "";
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div onClick={closeModal} className="modal">
      <div
        className="modalWrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalContent">
          <span>{message}</span>
        </div>
        <button className="closeModalBnt" onClick={closeModal}>
          <img src={cross} className="crossImage" alt="cross"></img>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
  message: PropTypes.string,
};

export default Modal;
