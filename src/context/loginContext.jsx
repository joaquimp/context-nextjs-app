'use client';

import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

// Componente que conterá o estado compartilhado e será
// usado como componete raiz, dando acesso ao estado
// compartilhado a todos os filhos
function LoginProvider({ children }) {
  const [user, setUser] = useState(null); // null representa usuário não autenticado

  const logoff = () => {
    setUser(null);
  };
  const login = (userName) => {
    setUser({ username: userName, loggedAt: Date() });
  };

  const value = { user, login, logoff };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);

  // um erro será exibido se tentar usar o contexto em um elemento que não seja filho de LoginProvider
  if (context === undefined)
    throw new Error('useLogin deve ser usado com um LoginProvider');

  return context;
}

export { LoginProvider, useLogin };
