// Components
import Clock from "components/Clock/Clock";

// Styles
import {
  MobileMenuContainer,
  IconContainer,
  BatteryIcon,
  SignalIcon,
  SignalWifi,
} from "./MobileMenuElements";

function MobileMenu({ theme }) {
  return (
    <MobileMenuContainer theme={theme}>
      <Clock />
      <IconContainer>
        <SignalWifi />
        <SignalIcon />
        <BatteryIcon />
      </IconContainer>
    </MobileMenuContainer>
  );
}

export default MobileMenu;

// DOCS

// MobileMenuContainer
// Background
// Si le pasamos la prop transparent, sera transparente --- transparent
// Si le pasamos un color, sera ese color --- color="red"
// Sino, por defecto, sera blanco
// Text color
// Si le pasamos la prop dark, el texto será oscuro --- text="dark"
// Si le pasamos la prop light, el texto será claro --- text="light"
// Si no le pasamos nada, será light
