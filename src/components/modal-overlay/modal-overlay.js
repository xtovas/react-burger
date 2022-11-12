import PropTypes from "prop-types";
import OverlayStyles from "./modal-overlay.module.css";

const ModalOverlay = (popup) => {
  return <div className={OverlayStyles.overlay} onClick={popup.onClick}></div>;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;