import { createContext, useReducer, useEffect } from "react";

// create context for user
export const userContext = createContext({
  theme: null,
  setTheme: (theme) => {},
});

// user reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  // manage state with useReducer
  const [state, dispatch] = useReducer(userReducer, {
    theme: "light",
  });

  //  change theme function
  const setTheme = (theme) => {
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
  };

  // set the theme to user prefered theme
  useEffect(() => {
    // check theme onmount
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      dispatch({
        type: "SET_THEME",
        payload: "dark",
      });
    } else {
      dispatch({
        type: "SET_THEME",
        payload: "light",
      });
    }
  }, []);

  // set theme to selected theme
  useEffect(() => {
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <userContext.Provider
      value={{
        theme: state.theme,
        setTheme,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
