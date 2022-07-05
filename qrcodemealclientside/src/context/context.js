import React, {createContext,useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {
  const [role, setRole] = useState(2);
  const [highlightedColor , setHighlightedColor] = useState("yellow")
  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        highlightedColor,
        setHighlightedColor
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
