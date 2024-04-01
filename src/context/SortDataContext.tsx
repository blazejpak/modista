import { createContext, useState } from "react";

interface SortDataContextType {
  sortedData: any[];
  setSortedData: React.Dispatch<React.SetStateAction<any[]>>;
  typeSort: string;
  setTypeSort: React.Dispatch<React.SetStateAction<string>>;
}

const initialSortData: SortDataContextType = {
  sortedData: [],
  setSortedData: () => {},
  typeSort: "Lowest price",
  setTypeSort: () => {},
};

export const SortDataContext = createContext(initialSortData);

export const SortDataProvider = ({ children }: any) => {
  const [sortedData, setSortedData] = useState<Array<any>>([]);
  const [typeSort, setTypeSort] = useState<string>("Lowest price");

  return (
    <SortDataContext.Provider
      value={{ sortedData, setSortedData, typeSort, setTypeSort }}
    >
      {children}
    </SortDataContext.Provider>
  );
};
