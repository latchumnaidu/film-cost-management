import React, { useState, useEffect } from "react";
export const AuthContext = React.createContext<any>(undefined);
AuthContext.displayName = "Auth Context";

export function AuthContextProvider({ children }:any): JSX.Element { 
  
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
}
