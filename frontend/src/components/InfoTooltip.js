import React from "react";
import icon_ok from "../images/ok.svg";
import icon_fail from "../images/error.svg";
import { usePopupClose } from "../hooks/usePopupClose";

function InfoTooltip(props) {
    usePopupClose(props.isOpen,props.onClose)
    const { name, isSignIn, isOpen, onClose } = props;
    const icon = isSignIn ? icon_ok : icon_fail;
    const message = isSignIn
        ? "Вы успешно зарегистрировались!"
        : "Что-то пошло не так! Попробуйте ещё раз.";

    return (
        <div
            className={`popup popup_type_${name} ${
                isOpen ? "popup_opened" : ""
            }`}
        >
            <div className="popup__container popup__container_type_tooltip">
                <button
                    className="popup__close-button"
                    aria-label="Закрыть"
                    onClick={onClose}
                ></button>
                <img
                    className="popup__tooltip-img"
                    src={icon}
                    alt="Что то пошло не так"
                />
                <h2 className="popup__title">{message}</h2>
            </div>
        </div>
    );
}

export default InfoTooltip;