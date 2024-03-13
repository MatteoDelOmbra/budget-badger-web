import { UserKey } from "@utils/localStorageKeys";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { User } from "src/types/User";

type AuthContextProps = {
  data: User | null;
  signin: Function;
  signout: Function;
  isSignedIn: Function;
};

const AuthContext = createContext<AuthContextProps>({
  data: null,
  signin: () => {},
  signout: () => {},
  isSignedIn: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  const signin = () => {
    //post request to API
    //it should return rejection if invalid, or userObject and refreshToekn (refToken will be added later)
    const user: User = { id: 5, name: "Matteo" };
    localStorage.setItem(UserKey, JSON.stringify(user));
    setUser(user);
  };

  const signout = () => {
    localStorage.removeItem(UserKey);
    setUser(null);
  };

  const isSignedIn = () => {
    const user = localStorage.getItem(UserKey);
    if (user === null) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <AuthContext.Provider value={{ data: user, signin, signout, isSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
