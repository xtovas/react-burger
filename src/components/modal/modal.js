import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalStyles from "./modal.module.css";
const modals = document.querySelector("#modals");

export default function Modal({children, close, isOpen}) {
    useEffect(() => {
      const handleEsc = (evt) => {
        if (evt.key === "Escape") {
          close();
        }
      };
      if (isOpen) {
        document.addEventListener("keydown", handleEsc);
        return () => {
          document.removeEventListener("keydown", handleEsc);
        };
      }
    }, [isOpen, close]);
  
    return (
      isOpen &&
      createPortal(
        <div className={ModalStyles.modal}>
          <div className={ModalStyles.popup}>
            <div className={ModalStyles.close} onClick={close}>
              <CloseIcon type="primary" />
            </div>
            {children}
          </div>
          <ModalOverlay onClick={close} />
        </div>,
        modals
      )
    );
  };
  
  Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
  };