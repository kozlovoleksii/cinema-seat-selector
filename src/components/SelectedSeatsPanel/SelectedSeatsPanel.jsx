import "./SelectedSeatsPanel.css";

export const SelectedSeatsPanel = ({ selectedSeats, seats, onRemove, onContinue }) => {
    
const getSeatDetails = (id) => {
  const row = Math.ceil(id / 10);
  const place = id % 10 === 0 ? 10 : id % 10;
  const price = seats.find((s) => s.id === id)?.type === "seat--vip" ? 300 : 150;

  return { row, place, price };
};

  const total = selectedSeats.reduce((sum, id) => {
    const seat = seats.find((s) => s.id === id);
    return sum + (seat.type === "seat--vip" ? 300 : 150);
  }, 0);

  return (
    <aside className="selected-panel">
      { selectedSeats.length===0 ? <p className="selected-panel-temp-text">Квитки з’являться тут, <br/>коли ти обереш місця 🎟️</p>:""}
      {selectedSeats.map((id) => {
        const { row, place, price } = getSeatDetails(id);
        return (
          <div key={id} className="selected-seat">
            <p>{row} ряд, {place} місце</p>
            <p className="selected-seat-price">{price} грн</p>
            <button onClick={() => onRemove(id)}>✕</button>
          </div>
        );
      })}

      {selectedSeats.length > 0 && (
        <div className="selected-total">
          <p className="selected-total-count">Всього: {selectedSeats.length} {selectedSeats.length>1?"квитки":"квиток"}</p>
          <p className="selected-total-price">{total} грн</p>
          <button className="selected-panel__submit" onClick={onContinue}>Продовжити</button>
        </div>
      )}
    </aside>
  );
};
