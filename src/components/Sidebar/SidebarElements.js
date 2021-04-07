import styled from "styled-components";

export const SidebarStyled = styled.div`
  position: absolute;
  top: 0;
  right: -100vw;
  height: 100%;
  min-height: 100px;
  min-width: 0;
  z-index: 10;
  /* background: rgba(2, 0, 0, 0.75); */
  background: ${(props) => props.theme.backgroundColor};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
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
  border-radius: 30px;
  background: #0000006e;

  &.sidebar__background-visible {
    left: 0;
    opacity: 1;
    z-index: 9;
    transition: 0.3s ease;
    border-radius: 30px;
  }
`;

export const SidebarULStyled = styled.ul`
  list-style: none;
  width: 80%;
`;

export const LiStyled = styled.li`
  margin: 15px 0;
  font-size: 1.5em;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, -0.72, 0, 1.75);
  transition-delay: none;
  transform-origin: 0%;
  opacity: 0.7;
  border-bottom: 1px solid ${(props) => `${props.theme.textColor}20`};
  padding-bottom: 10px;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
    border-bottom: 1px solid ${(props) => `${props.theme.textColor}80`};
  }
`;

export const CloseSidebarStyled = styled.p`
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 0.75em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;
