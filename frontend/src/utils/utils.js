const configFormSelector = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__button', 
  inactiveButtonClass: 'popup__button_disable', 
  inputErrorClass: '.popup__input_type_error', 
  errorClass: 'popup__error_visible' 
}; 

const apiCofig = {
  url: 'http://api.saiginmesto.nomoredomainsmonster.ru/',
  headers: {
    authorization: '447d59ea-f397-4703-9e88-c54528884047',
    'Content-Type':'application/json'
  }
}

export {apiCofig,configFormSelector}