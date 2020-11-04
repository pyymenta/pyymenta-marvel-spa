import { getCharacters, getCharacterById } from './characters';

describe('getCharacters', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it('calls the fetch api', async () => {
    window.fetch = jest.fn(() => ({
      then: () => {
        return new Promise((resolve) => resolve({}));
      },
    }));

    const comics = await getCharacters();

    expect(typeof comics === 'object').toBe(true);
  });
});

describe('getCharacterById', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it('calls the fetch api', async () => {
    window.fetch = jest.fn(() => ({
      then: () => {
        return new Promise((resolve) => resolve({}));
      },
    }));

    const comic = await getCharacterById();

    expect(typeof comic === 'object').toBe(true);
  });
});
