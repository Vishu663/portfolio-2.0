import PropTypes from "prop-types"; // Import PropTypes
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Project Statement</h2>
            <p>
              The project is confidential and in development. Will be soon
              availble for public use
            </p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired, // Fix the PropTypes declaration for isOpen
};

export default Modal;
