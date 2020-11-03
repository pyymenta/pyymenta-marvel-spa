import md5 from 'md5';

const MARVEL_API_HOST = 'https://gateway.marvel.com';
const CHARACTERS_ENDPOINT = '/v1/public/characters';
const PUBLIC_API_KEY = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
const PRIVATE_API_KEY = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY;
const TIMESTAMP = new Date().getTime();
const HASH = md5(TIMESTAMP + PRIVATE_API_KEY + PUBLIC_API_KEY).toString();

export const getCharacters = () => {
  return fetch(
    `${MARVEL_API_HOST}${CHARACTERS_ENDPOINT}?ts=${TIMESTAMP}&apikey=${PUBLIC_API_KEY}&hash=${HASH}`
  ).then((res) => res.json());
};

export const getCharacterById = (id) => {
  return fetch(
    `${MARVEL_API_HOST}${CHARACTERS_ENDPOINT}/${id}?ts=${TIMESTAMP}&apikey=${PUBLIC_API_KEY}&hash=${HASH}`
  ).then((res) => res.json());
};
