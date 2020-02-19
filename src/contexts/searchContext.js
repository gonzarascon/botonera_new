import React, { useReducer, useContext, createContext } from "react";

const SearchStateContext = createContext(null);
const SearchDispatchContext = createContext(null);

/* Action Type */
const CHANGE_SEARCH = "CHANGE_SEARCH";

/* Initial State */
const initialState = {
  search: "",
};

/* Reducer */
export function SearchReducer(state, action) {
  if (action.type) {
    return { ...state, search: action.payload.search };
  }

  return state;
}

/* Action creator */
export function setSearchAction(searchInput) {
  return {
    type: CHANGE_SEARCH,
    payload: {
      search: searchInput,
    },
  };
}

/* Contexts Providers */
export function SearchContextProvider({ children }) {
  const [state, dispatch] = useReducer(SearchReducer, initialState);
  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
}

export function useSearchState() {
  const context = useContext(SearchStateContext);
  if (context === undefined) {
    throw new Error(
      "useSearchState must be used within a SearchContextProvider"
    );
  }
  return context;
}

export function useSearchDispatch() {
  const context = useContext(SearchDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useSearchDispatch must be used within a SearchContextProvider"
    );
  }
  return context;
}
