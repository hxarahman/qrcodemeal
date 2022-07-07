import React, {createContext,useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {
  const [role, setRole] = useState(2);
  const [highlightedColor , setHighlightedColor] = useState("#ee2c30")
  const [backgroundColor , setBackgroundColor ] = useState('#FFFFFF')
  const [textColor , setTextColor] = useState("#575962")
  const [pageTitle , setPageTitle] = useState()
  const [shortDescription , setShortDescription] = useState()
  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        highlightedColor,
        setHighlightedColor,
        backgroundColor,
        setBackgroundColor,
        textColor,setTextColor,
        pageTitle,
        setPageTitle,
        shortDescription,
        setShortDescription
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
