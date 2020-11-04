const FAVORITES_LIMIT = 5;
const FAVORITES_LOCALSTORAGE_KEY = 'favorites';

export const get = () => {
  const favorites = localStorage.getItem(FAVORITES_LOCALSTORAGE_KEY);

  return JSON.parse(favorites) || [];
};

export const set = (favoriteList) => {
  localStorage.setItem(FAVORITES_LOCALSTORAGE_KEY, JSON.stringify(favoriteList));
};

export const add = (id) => {
  const favorites = get();

  if (favorites.length === FAVORITES_LIMIT) {
    return false;
  }

  favorites.push(id);

  set(favorites);

  return true;
};

export const remove = (id) => {
  const favorites = get();

  set(favorites.filter((idFavorite) => id !== idFavorite));

  return true;
};

export const isFavorite = (id) => {
  const favorites = get();

  if (!favorites.includes(id)) {
    return false;
  }

  return true;
};
