import React, {createContext,useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {
  const [role, setRole] = useState();
  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
