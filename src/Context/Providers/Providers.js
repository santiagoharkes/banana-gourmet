import { ThemeProvider } from "Context/Theme/ThemeContext";
import { ProductsProvider } from "Context/Products/ProductsContext";
import { CartContextProvider } from "Context/Cart/CartContext";
import { AuthContextprovider } from "Context/Auth/AuthContext";
import { Menuprovider } from "Context/Menu/MenuContext";
import { CheckoutContextProvider } from "Context/Checkout/CheckoutContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthContextprovider>
        <Menuprovider>
          <ProductsProvider>
            <CartContextProvider>
              <CheckoutContextProvider>{children}</CheckoutContextProvider>
            </CartContextProvider>
          </ProductsProvider>
        </Menuprovider>
      </AuthContextprovider>
    </ThemeProvider>
  );
}

export default Providers;
