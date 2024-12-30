"use client";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});

  const fetchWeather = async () => {
    try {
      const res = await axios.get("api/weather");
      setForecast(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching data", error.message);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <GlobalContext.Provider value={{ forecast }}>
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
