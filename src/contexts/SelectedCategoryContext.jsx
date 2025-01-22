import { createContext, useContext, useState } from "react";
const SelectedCategoryContext = createContext();

// Custom hook to use the SelectedCategoryContext
export const useSelectedCategory = () => {
  return useContext(SelectedCategoryContext);
};

// SelectedCategoryContext provider component
export const SelectedCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setCategory: setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};
