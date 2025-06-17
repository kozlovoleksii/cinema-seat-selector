import { useState } from "react";
import "./SeatSelectionPage.css";
import { SelectedSeatsPanel } from "../../components/SelectedSeatsPanel/SelectedSeatsPanel";
import { usePersistedState } from "../../hooks/usePersistedState";
import { ConfirmModal } from "../../components/ConfirmModal/ConfirmModal";
import { useIsMobileOrTablet } from "../../hooks/useIsMobileOrTablet";

export const SeatSelectionPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const totalSeats = 60;
  const seatsPerRow = 10;
  const rows = totalSeats / seatsPerRow;

  const bookedSeatIds = [3, 17, 44];

  const initialSeats = Array.from({ length: totalSeats }, (_, i) => {
    const id = i + 1;
    return {
      id,
      type: id > 50 ? "seat--vip" : "seat--available",
      isBooked: bookedSeatIds.includes(id),
    };
  });

  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeats, setSelectedSeats] = usePersistedState(
    "selectedSeats",
    []
  );

  const toggleSeat = (id) => {
    const seat = seats.find((s) => s.id === id);
    if (seat.isBooked) return;

    if (selectedSeats.includes(id)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== id));
    } else {
      setSelectedSeats((prev) => [...prev, id]);
    }
  };

  const isMobile = useIsMobileOrTablet();

  return (
    <main className="seats-page">
      <h2 className="seats-page__title">Оберіть місця в залі</h2>

      <div className="seats-wrapper">
        <div className="seats-area-wrapper">
          <div className="seats-area">
            <div className="screen-display">Екран</div>

            <div className="seats-layout">
              <div className="seats-rows">
                {[...Array(rows)].map((_, i) => (
                  <div key={i} className="row-number">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="seats-page__seats-grid">
                {seats.map((seat, index) => {
                  const placeInRow = (index % seatsPerRow) + 1;
                  return (
                    <div
                      key={seat.id}
                      className={`seat
        ${seat.type}
        ${seat.isBooked ? "booked" : ""}
        ${selectedSeats.includes(seat.id) ? "selected" : ""}
      `}
                      onClick={() => toggleSeat(seat.id)}
                    >
                      {placeInRow}
                    </div>
                  );
                })}
              </div>

              <div className="seats-rows">
                {[...Array(rows)].map((_, i) => (
                  <div key={i} className="row-number">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="seats-page__legend">
              <div className="legend-item">
                <span className="seat legend-seat seat--available" />
                <span>Доступне (150 грн)</span>
              </div>
              <div className="legend-item">
                <span className="seat legend-seat seat--available-vip" />
                <span>VIP (300 грн)</span>
              </div>
              <div className="legend-item">
                <span className="seat legend-seat seat--selected" />
                <span>Обране</span>
              </div>
              <div className="legend-item">
                <span className="seat legend-seat seat--taken" />
                <span>Недоступне</span>
              </div>
            </div>
          </div>
        </div>

        {isMobile && (
          <SelectedSeatsPanel
            selectedSeats={selectedSeats}
            seats={seats}
            onRemove={(id) =>
              setSelectedSeats((prev) => prev.filter((seatId) => seatId !== id))
            }
            onContinue={() => setShowConfirm(true)}
          />
        )}

        {!isMobile && (
          <SelectedSeatsPanel
            selectedSeats={selectedSeats}
            seats={seats}
            onRemove={(id) =>
              setSelectedSeats((prev) => prev.filter((seatId) => seatId !== id))
            }
            onContinue={() => setShowConfirm(true)}
          />
        )}

        {showConfirm && (
          <ConfirmModal
            onConfirm={() => {
              setShowConfirm(false);
              setShowThanks(true);
              setSelectedSeats([]);
            }}
            onCancel={() => setShowConfirm(false)}
          />
        )}

        {showThanks && (
          <div className="modal-backdrop">
            <div className="modal-window">
              <p className="modal-window-text">
                Дякуємо за покупку! <br />Очікуйте квитки на пошті 📩
              </p>
              <button
                className="modal-window-btn"
                onClick={() => setShowThanks(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
