import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalAppContext = createContext();

export const GlobalAppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      const dataArray = Object.values(res.data);
      setData(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const url = "https://pegasuswallpaper-c09bf-default-rtdb.firebaseio.com/images.json";
    fetchData(url);
  }, []);

  return <GlobalAppContext.Provider value={data}>{children}</GlobalAppContext.Provider>;
};

export default GlobalAppContext;
