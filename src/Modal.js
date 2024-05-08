import "./Modal.css";

const Modal = ({ handleClose }) => {
  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal">
        <div className="modal-body">
          <div className="modal-name">{"santoshi"}</div>
          <div className="modal-role">{"software developer"}</div>
          <div className="skills">
            <ul>
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
              <li>list 5</li>
              <li>list 6</li>
              <li>list 7</li>
              <li>list 8</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
