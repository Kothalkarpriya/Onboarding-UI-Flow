import { createContext, useContext, useReducer } from "react";

const DetailContext = createContext();

function DetailContextProvider({ children }) {
  const initialState = {
    step: 1,
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    workspaceFor: "",
  };

  const changeHandler = (state, action) => {
    switch (action.type) {
      case "UPDATE_FULLNAME":
        return { ...state, fullName: action.payload };
      case "UPDATE_DISPLAY_NAME":
        return { ...state, displayName: action.payload };
      case "UPDATE_WORKSPACE_NAME":
        return { ...state, workspaceName: action.payload };
      case "UPDATE_WORKSPACE_URL":
        return { ...state, workspaceUrl: action.payload };
      case "UPDATE_WORKSPACE_FOR":
        return { ...state, workspaceFor: action.payload };
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(changeHandler, initialState);

  return (
    <DetailContext.Provider value={{ state, dispatch }}>
      {children}
    </DetailContext.Provider>
  );
}

const useDetailContext = () => useContext(DetailContext);

export { DetailContextProvider, useDetailContext };
