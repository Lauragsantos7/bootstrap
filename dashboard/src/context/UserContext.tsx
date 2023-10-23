import { createContext } from "react";
type UserContextType = {
  userData: {
    name: string;
    email: string;
    street: string;
    houseNumber: string;
    complement: string;
    city: string;
    state: string;
    birthday: string;
  };
};

const UserContext = createContext({} as UserContextType);

export default UserContext;