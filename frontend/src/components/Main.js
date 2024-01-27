import React, { useContext} from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const userItem = useContext(CurrentUserContext);
  return (
    <main>
      <section className="profile">
        <img
          src={userItem.avatar}
          alt="Аватар пользователя"
          className="profile__avatar"
        />
        <button
          type="button"
          className="profile__avatar-edit"
          aria-label="Редактировать аватар"
          onClick={props.onEditAvatar}
        ></button>
        <div className="profile__info">
          <h1 className="profile__name">{userItem.name}</h1>
          <button
            type="button"
            className="profile__editor"
            aria-label="Редактировать профиль"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__proffesion">{userItem.about}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          aria-label="Добавить место"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="element">
        {props.cards.map((card) => {
          return (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              onCardLike = {props.onCardLike}
              onCardDelete = {props.onCardDelete}
              card={card}
            />
          );
        })}
      </section>
    </main>
  );
}
export default Main;


