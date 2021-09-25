import { useEffect } from "react";

export const ENTER_KEY = 13;
export const UP_ARROW_KEY = 38;
export const DOWN_ARROW_KEY = 40;

export default function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.keyCode === key) {
        action();
      }
    }
    window.addEventListener("keyup", onKeyup);

    return () => window.removeEventListener("keyup", onKeyup);
  }, [action, key]);
}
