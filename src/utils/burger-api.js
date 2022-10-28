export const NORMA_API = `https://norma.nomoreparties.space/api`;
export const ORDER_API = 'https://norma.nomoreparties.space/api/orders';
const getIngredients=() => {
   return fetch(`${NORMA_API}/ingredients`)
    .then(checkResponse);
}
const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return  Promise.reject(`Что-то пошло не так: ${res.status}`);
  };

export {getIngredients};
