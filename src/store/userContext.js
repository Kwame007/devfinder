import { createContext, useReducer } from "react";

// create context for user
export const userContext = createContext({
  theme: "light",
  setTheme: () => {},
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
