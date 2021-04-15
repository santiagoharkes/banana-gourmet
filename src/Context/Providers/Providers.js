import { ThemeProvider } from "Context/Theme/ThemeContext";
import { ProductsProvider } from "Context/Products/ProductsContext";
import { CartContextProvider } from "Context/Cart/CartContext";
import { AuthContextprovider } from "Context/Auth/AuthContext";
import { Menuprovider } from "Context/Menu/MenuContext";
import { CheckoutContextProvider } from "Context/Checkout/CheckoutContext";
import { PedidoContextProvider } from "Context/Pedido/PedidoContext";
import { SearchContextProvider } from "Context/Search/SearchContext";
import { ContactProvider } from "Context/Contact/ContactContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthContextprovider>
        <Menuprovider>
          <ProductsProvider>
            <CartContextProvider>
              <CheckoutContextProvider>
                <PedidoContextProvider>
                  <SearchContextProvider>
                    <ContactProvider>{children}</ContactProvider>
                  </SearchContextProvider>
                </PedidoContextProvider>
              </CheckoutContextProvider>
            </CartContextProvider>
          </ProductsProvider>
        </Menuprovider>
      </AuthContextprovider>
    </ThemeProvider>
  );
}

export default Providers;
