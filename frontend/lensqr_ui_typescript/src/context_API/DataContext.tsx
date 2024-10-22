import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface DataContextType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of undefined
const DataContext = createContext<DataContextType | undefined>(undefined);

// Define the props type for the provider component
interface DataProviderProps {
  children: ReactNode;
}

// Create a provider component
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <DataContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the DataContext
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};


























































// import React, { createContext, useContext, useState } from 'react';

// // Create a context
// const DataContext = createContext();

// // Create a provider component
// export const DataProvider = ({ children }) => {
//     const [searchValue, setSearchValue] = useState('');

//     return (
//         <DataContext.Provider value={{ searchValue, setSearchValue }}>
//             {children}
//         </DataContext.Provider>
//     );
// };

// // Create a custom hook to use the DataContext
// export const useData = () => useContext(DataContext);


