import { useRef, useEffect } from "react";

const FirstRender = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};  
  export default FirstRender;