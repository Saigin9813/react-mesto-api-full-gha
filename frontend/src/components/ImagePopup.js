import React from "react";
import { usePopupClose } from "../hooks/usePopupClose";

function ImagePopup(props) {
  usePopupClose(props.isOpen,props.onClose)
  return (
    <div
      className={`popup popup_zoom-image ${props.isOpen ? "popup_opened" : ""}`}
      id={props.id}
    >
      <div className="popup__container popup__container_type_image">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть"
          onClick={props.onClose}
        />
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__img"
        />
        <h2 className="popup__zoom-title">{props.card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;
