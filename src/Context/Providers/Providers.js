import { ThemeProvider } from "Context/Theme/ThemeContext";
import { ProductsProvider } from "Context/Products/ProductsContext";
import { CartContextProvider } from "Context/Cart/CartContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <ProductsProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default Providers;
