export const isInCart = (product, cartItems) => {
  const isInCart = !!cartItems.find((item) => item.id === product.id);
  const itemInCart = isInCart
    ? cartItems.find((item) => item.id === product.id)
    : null;
  return itemInCart;
};
