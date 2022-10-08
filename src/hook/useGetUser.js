import { useReducer, useEffect } from "react";
import { Octokit } from "octokit";

// Create a new instance of Octokit
const octokit = new Octokit({
  auth: "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",
  userAgent: "devfinder/v1.0.0",
});

// reducer function
const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useGetUser = (userQuery) => {
  // manage state with useReducer
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    error: null,
  });

  // get user data
  useEffect(() => {
    const getUser = async () => {
      dispatch({ type: "SET_LOADING", payload: true });

      const data = await octokit.request("GET /users/{username}", {
        username: `${userQuery}`,
      });

      //  dispatch action to update user state
      dispatch({ type: "GET_USER", payload: data.data });
    };

    getUser().catch((error) => {
      dispatch({ type: "ERROR", payload: error.message });
    });
  }, [userQuery]);

  return {
    user: state.user,
    error: state.error,
  };
};

export default useGetUser;
