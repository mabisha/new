//used to dynamically create a page when clicked on activities or gallery card
import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState(null);
  return (
    <DataContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
