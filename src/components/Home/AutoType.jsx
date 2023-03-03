import React, { useEffect, useRef } from "react";
import { MyGlobalProvider } from "../../Context";
import Typed from "typed.js";

const AutoType = () => {
  const { jokes, loading } = MyGlobalProvider();
  const typeSpan = useRef(null);
  const typecontrol = useRef(null);

  useEffect(() => {
    const options = {
      strings: [!loading && `${jokes}`],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    };
    typecontrol.current = new Typed(typeSpan.current, options);
    return () => typecontrol.current.destroy();
  }, []);
  return <span ref={typeSpan} className="span-type-auto"></span>;
};

export default AutoType;
