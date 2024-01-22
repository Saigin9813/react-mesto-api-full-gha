import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();
  useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);
  
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={"edit-avatar"}
      title={"Обновить аватар"}
      form={"avatar-edit"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
      children={
        <>
          <input
            type="url"
            name="avatar"
            className="popup__input popup__input_type_avatar"
            placeholder="Ссылка на аватар профиля"
            required=""
            autoComplete="off"
            ref={avatarRef}
          />
          <span id="avatar-error" className="popup__error" />
        </>
      }
    />
  );
}
export default EditAvatarPopup;
