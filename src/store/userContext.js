import { createContext, useReducer } from "react";
import useGetUser from "../hook/useGetUser";
// create context for user
export const userContext = createContext({
  theme: "light",
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

  const { user } = useGetUser(state.searchQuery);

  return (
    <userContext.Provider
      value={{
        theme: "light",
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
