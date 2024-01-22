import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const userItem = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === userItem._id;
  const isLiked = props.card.likes.some(item => item._id === userItem._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeCard(){
    props.onCardLike(props.card);
  }

  function handleDeleteCard(){
    props.onCardDelete(props.card);
  }

  return (
    <article className="elements__card">
      {isOwn && <button
        type="button"
        className="cards__delete"
        aria-label="Удалить"
        onClick={handleDeleteCard}
      ></button>}
      <img
        src={props.link}
        alt={props.name}
        className="elements__image"
        onClick={handleClick}
      />
      <div className="elements__description">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__like-area">
          <button type="button" className={`elements__like ${isLiked ? 'elements__like_active': ''}`} onClick={handleLikeCard}></button>
          <p className="elements__like-counter">{props.likes > 0 ? props.likes: 0}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
