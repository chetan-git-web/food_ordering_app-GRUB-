import { useState, useEffect } from "react";

const useOnline = () => {
  const [state, usestate] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      usestate(true);
    });
    window.addEventListener("offline", () => {
      usestate(false);
    });
    setTimeout(() => {}, 5000);
  }, []);

  return state;
};
export default useOnline;
