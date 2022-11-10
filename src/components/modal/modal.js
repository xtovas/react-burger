import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalStyles from "./modal.module.css";

const modals = document.querySelector("#modals");

function Modal(props) {
  useEffect(
    function () {
      function handleEsc(evt) {
        if (evt.key === "Escape") {
          props.close();
        }
      }
      if (props.isOpen) {
        document.addEventListener("keydown", handleEsc);
        return () => {
          document.removeEventListener("keydown", handleEsc);
        };
      }
    },
    [props.isOpen]
  );

  return (
    props.isOpen &&
    createPortal(
      <div className={ModalStyles.modal}>
        <div className={ModalStyles.popup}>
          <div className={ModalStyles.close} onClick={props.close}>
            <CloseIcon type="primary" />
          </div>
          {props.children}
        </div>
        <ModalOverlay onClick={props.close} />
      </div>,
      modals
    )
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;