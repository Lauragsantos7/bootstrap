import { createContext } from "react";
type UserContextType = {
  userData: {
    name: string;
    email: string;
    street: string;
    houseNumber: number;
    complement: string;
    city: string;
    state: string;
    birthday: string;
  };
};

const UserContext = createContext({} as UserContextType);

type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
    const values = ""

  return <UserContext.Provider value={values}>
    {children}
    </UserContext.Provider>;
}

export default UserProvider;
