import { createContext, useState } from "react";

interface SortDataContextType {
  sortedData: any[];
  setSortedData: React.Dispatch<React.SetStateAction<any[]>>;
}

const initialSortData: SortDataContextType = {
  sortedData: [],
  setSortedData: () => {},
};

export const SortDataContext = createContext(initialSortData);

export const SortDataProvider = ({ children }: any) => {
  const [sortedData, setSortedData] = useState<Array<any>>([]);

  return (
    <SortDataContext.Provider value={{ sortedData, setSortedData }}>
      {children}
    </SortDataContext.Provider>
  );
};
