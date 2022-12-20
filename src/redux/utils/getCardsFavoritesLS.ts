
export const getCartLS = () => {
  const data = localStorage.getItem('cart');
  const cardsFavorites = data ? JSON.parse(data) : [];
  return { cardsFavorites };
};