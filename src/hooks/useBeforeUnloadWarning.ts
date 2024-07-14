/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

const useBeforeUnloadWarning = (message: string) => {
  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      e.preventDefault();
      e.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [message]);
};

export default useBeforeUnloadWarning;
