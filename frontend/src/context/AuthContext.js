import { createContext, useEffect, useReducer } from "react";

// Helper function to safely get user from localStorage
const getUserFromStorage = () => {
  try {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      // Check if the parsed user has required properties
      if (parsedUser && parsedUser.username) {
        return parsedUser;
      }
    }
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
    localStorage.removeItem('user'); // Clear invalid data
  }
  return null;
};

const initial_state = {
  user: getUserFromStorage(),
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true, 
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload, 
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload, 
      };
    case 'REGISTER_SUCCESS':
      return {
        user: null,
        loading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(AuthReducer, initial_state); 

  // Persist user data to localStorage whenever it changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch,
    }}>
      {children}
    </AuthContext.Provider>
  );
};