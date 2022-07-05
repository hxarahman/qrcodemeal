import React, {createContext,useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {
  const [role, setRole] = useState();
  const [categoryData , setCategoryData] = useState()
  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        categoryData,
        setCategoryData
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
