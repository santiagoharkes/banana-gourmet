import { useTheme } from "Context/ThemeContext";

function Home() {
  const { changeTheme, ...state } = useTheme();
  return (
    <h1>
      HOla
      <button
        onClick={() => {
          if (state.theme === "dark") {
            changeTheme("light");
          } else {
            changeTheme("dark");
          }
        }}
      >
        Cambiar tema
      </button>
    </h1>
  );
}

export default Home;
