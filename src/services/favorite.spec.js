import { get, set, add, remove, isFavorite } from './favorite';

describe('get', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('favorite key is missing', () => {
    Storage.prototype.getItem = jest.fn(() => null);

    const favoriteIds = get();

    it('returns an empty array', () => {
      expect(favoriteIds).toEqual([]);
    });
  });

  describe('favorite key contains value', () => {
    Storage.prototype.getItem = jest.fn(() => '[111, 222]');

    const favoriteIds = get();

    it('returns an array with 2 elements when localStorage returns an array with 2 elements', () => {
      expect(favoriteIds.sort()).toEqual([111, 222].sort());
    });
  });
});

describe('set', () => {
  Storage.prototype.setItem = jest.fn(() => {});

  it('localStorage setItem method should be called', () => {
    set([111]);

    expect(localStorage.setItem).toHaveBeenCalledWith('favorites', '[111]');
  });
});

describe('add', () => {
  describe('limit is not reached', () => {
    Storage.prototype.getItem = jest.fn(() => '[1, 2, 3, 4]');

    const addResult = add(6);

    it('addResult returns true', () => {
      expect(addResult).toBe(true);
    });
  });

  describe('limit is reached', () => {
    Storage.prototype.getItem = jest.fn(() => '[1, 2, 3, 4, 5]');

    const addResult = add(6);

    it('returns false when limit is reached', () => {
      expect(addResult).toEqual(false);
    });
  });
});

describe('remove', () => {
  describe('when id is present', () => {
    Storage.prototype.setItem = jest.fn(() => {});

    it('removes id from storage', () => {
      Storage.prototype.getItem = jest.fn(() => '[1, 2]');

      const removed = remove(1);

      expect(localStorage.setItem).toBeCalledWith('favorites', '[2]');
      expect(removed).toBe(true);
    });
  });

  describe('when id is not present', () => {
    Storage.prototype.setItem = jest.fn(() => {});

    it('removes id from storage', () => {
      Storage.prototype.getItem = jest.fn(() => '[1, 2]');

      const removed = remove(3);

      expect(localStorage.setItem).toBeCalledWith('favorites', '[1,2]');
      expect(removed).toBe(true);
    });
  });
});

describe('isFavorite', () => {
  Storage.prototype.getItem = jest.fn(() => '[1, 2]');

  const favoritedId = isFavorite(1);
  const nonFavoritedId = isFavorite(42);

  it('returns true when id is in favoriteList', () => {
    expect(favoritedId).toBe(true);
  });

  it('returns false when id is not in favoriteList', () => {
    expect(nonFavoritedId).toBe(false);
  });
});
