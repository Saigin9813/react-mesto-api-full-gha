import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser,props.isOpen]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
      <PopupWithForm
        name={"edit-profile"}
        title={"Редактировать профиль"}
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        form={"profile-edit"}
        isLoading={props.isLoading}
        children={
          <>
            <input
              type="text"
              name="name"
              className="popup__input popup__input_type-name"
              placeholder="Имя"
              required=""
              autoComplete="off"
              minLength={2}
              maxLength={40}
              value={name || ''}
              onChange={handleName}
            />
            <span id="username-error" className="popup__error" />
            <input
              type="text"
              name="about"
              className="popup__input popup__input_type-proffession"
              placeholder="О себе"
              required=""
              autoComplete="off"
              minLength={2}
              maxLength={200}
              value={description || ''}
              onChange={handleDescription}
            />
            <span id="proffesion-error" className="popup__error" />
          </>
        }
      />
  );
}
export default EditProfilePopup;
