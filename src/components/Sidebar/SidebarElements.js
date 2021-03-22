import styled from "styled-components";

export const SidebarStyled = styled.div`
  position: absolute;
  top: 0;
  right: -100vw;
  height: 100%;
  min-height: 100px;
  min-width: 0;
  z-index: 10;
  background: rgba(2, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  transition-delay: 3000ms;
  transition: all 0.3s ease;

  &* {
    z-index: 10;
  }

  &.sidebar__sidebar-visible {
    right: -10px;
    width: 80%;
    transition: all 0.5s cubic-bezier(0.95, -0.01, 0, 1.13);
    transition-delay: 0.1s;
  }
`;

export const SidebarBackgroundStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  opacity: 0;
  transition: 0.3s ease;
  transition-delay: 0.2s;

  &.sidebar__background-visible {
    left: 0;
    opacity: 1;
    z-index: 9;
    transition: 0.3s ease;
  }
`;
