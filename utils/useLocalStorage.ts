import { useState } from "react";

export const useLocalStorage = (key, initialValue: any[]) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const itemFromStorage = window.localStorage.getItem(key);
      return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });
  const setNewValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };
  return [storedValue, setNewValue];
};
