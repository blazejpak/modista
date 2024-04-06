import React, { ReactNode, createContext, useState } from "react";
import { Product } from "../utils/types";

interface SortDataContextType {
  sortedData: Product[];
  setSortedData: React.Dispatch<React.SetStateAction<Product[]>>;
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

interface SortDataProviderProps {
  children: ReactNode;
}

export const SortDataProvider = ({ children }: SortDataProviderProps) => {
  const [sortedData, setSortedData] = useState<Product[]>([]);
  const [typeSort, setTypeSort] = useState<string>("Lowest price");

  return (
    <SortDataContext.Provider
      value={{ sortedData, setSortedData, typeSort, setTypeSort }}
    >
      {children}
    </SortDataContext.Provider>
  );
};
