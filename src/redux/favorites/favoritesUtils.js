export const addItemToFavorite = (favoriteItems, favoriteItemToAdd) => {
  const existingFavoriteItems = favoriteItems.find(
    favoriteItem => favoriteItem.id === favoriteItemToAdd.id
  );

  if (existingFavoriteItems) {
    return favoriteItems.map(favoriteItem =>
      favoriteItem.id === favoriteItemToAdd.id
        ? { ...favoriteItem, quantity: favoriteItem.quantity + 1 }
        : favoriteItem
    );
  }

  return [...favoriteItems, { ...favoriteItemToAdd, quantity: 1 }];
};
