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
// Sino, por defecto, sera dark mode
