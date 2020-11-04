import getComicsByCharacterId from './comics';

describe('getComicsByCharacterId', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it('calls the fetch api', async () => {
    window.fetch = jest.fn(() => ({
      then: () => {
        return new Promise((resolve) => resolve({}));
      },
    }));

    const comics = await getComicsByCharacterId(1);

    expect(typeof comics === 'object').toBe(true);
  });
});
