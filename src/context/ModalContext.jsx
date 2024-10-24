
import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <ModalContext.Provider value={{ modal2Open, setModal2Open }}>
      {children}
    </ModalContext.Provider>
  );
};
