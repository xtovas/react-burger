export const API_URL = "https://norma.nomoreparties.space/api";

export const checkResponce = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };