const NORMA_API = `https://norma.nomoreparties.space/api`;

export async function loadIngredients() {
  const res = await fetch(`${NORMA_API}/ingredients`);
  return checkResponse(res);
}

const ORDER_API = "https://norma.nomoreparties.space/api/orders";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Что-то пошло не так: ${res.status}`);
};

export function createOrder(order) {
  return getData("POST", ORDER_API, order);
}

async function getData(method, NORMA_API, order) {
  const res = await fetch(NORMA_API, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (res.ok) return res.json();
  else return Promise.reject(`Ошибка ${res.status}`);
}