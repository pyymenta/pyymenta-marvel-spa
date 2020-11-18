import { useEffect, useRef, useReducer } from 'react';
import { getCharacters } from '../services/characters';
import { isFavorite } from '../services/favorite';

const useCharacters = () => {
  const charactersCache = useRef({});
  const initialState = {
    status: null,
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((reduceState, action) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'FETCHING' };
      case 'FETCHED':
        return { ...initialState, status: 'FETCHED', data: action.payload };
      case 'FETCH_ERROR':
        return { ...initialState, status: 'ERROR', data: action.payload };
      default:
        return reduceState;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;

    const fetchCharacters = async () => {
      dispatch({ type: 'FETCHING' });

      if (charactersCache.current.page_1) {
        const data = charactersCache.current.page_1;

        dispatch({ type: 'FETCHED', payload: data });
      }

      try {
        const charactersResult = await getCharacters();
        const characters = charactersResult.data.results.map((character) => ({
          heroId: character.id,
          heroName: character.name,
          heroImage: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          isFavorite: isFavorite(character.id),
        }));
        const payload = { characters, heroesCount: charactersResult.data.count };

        charactersCache.current.page_1 = payload;

        if (cancelRequest) {
          return;
        }

        dispatch({ type: 'FETCHED', payload });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchCharacters();

    return function cleanup() {
      cancelRequest = true;
    };
  }, []);

  return state;
};

export default useCharacters;
