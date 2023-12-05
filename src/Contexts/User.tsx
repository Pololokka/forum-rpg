import React, { createContext, useContext, useState } from 'react';

const defaultUser: {
  email: string;
  groups: [string];
  name: string;
  id: string;
} = {
  email: '',
  groups: [''],
  name: '',
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
