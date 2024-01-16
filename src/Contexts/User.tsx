import React, { createContext, useContext, useState } from 'react';

const defaultUser: {
  email: string;
  groups: [string];
  name: string;
  img: string;
  id: string;
} = {
  email: '',
  groups: [''],
  name: '',
  img: '',
  id: '',
};

// @ts-ignore
const UserContext = createContext();

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInfo, setUserInfo] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

const UserConsumer = () => useContext(UserContext);
export { UserContext, UserProvider, UserConsumer };
