import React from "react";
import PopupWithForm from "./PopupWithForm";
import { usePopupClose } from "../hooks/usePopupClose";

function PopupWithConfirm(props){
  usePopupClose(props.isOpen, props.onClose)
  function handleSubmit(e) {
    e.preventDefault();
  }
  return(
    <PopupWithForm
    name={"delete-image"}
    title={"Вы уверены?"}
    form={"delete-image"}
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    isLoading={props.isLoading}>
    </PopupWithForm>
  )
}
export default PopupWithConfirm;