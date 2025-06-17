import "./ConfirmModal.css";

export const ConfirmModal = ({ onConfirm, onCancel }) => {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-backdrop" onClick={onCancel}> 
      <div className="modal-window" onClick={stopPropagation}>
        <p className="modal-window-text">Бажаєте купити квитки?</p>
        <div className="modal-buttons">
          <button className="modal-window-btn" onClick={onConfirm}>Так</button>
          <button className="modal-window-btn" onClick={onCancel}>Продовжити вибір</button>
        </div>
      </div>
    </div>
  );
};