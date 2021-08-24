import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebare = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebare = () => {
    setIsSidebarOpen(false);
  };
  const openMoadal = () => {
    setIsModalOpen(true);
  };
  const closeMoadal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebare,
        closeSidebare,
        openMoadal,
        closeMoadal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
