import React from "react";
import { usePopupClose } from "../hooks/usePopupClose";

function PopupWithForm({isOpen, onClose, name, title, buttonText, children,form,onSubmit,isLoading}) {
  usePopupClose(isOpen,onClose)
  return (
    <div
      className={`popup popup_${name} ${
        isOpen ? `popup_opened` : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <form
          name={form}
          onSubmit={onSubmit}
          className={`popup__form popup__form_type_${name}`}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {buttonText = isLoading ? 'Сохранение...' : 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
