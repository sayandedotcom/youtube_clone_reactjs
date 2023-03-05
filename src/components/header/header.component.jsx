import React, { useEffect, useState } from "react";
import "./header.component.scss";
import LoadingBar from "react-top-loading-bar";
import Headerright from "./headerRight.component";
import Headercenter from "./headerCenter.component";
import Headerleft from "./headerLeft.component";

const Header = ({ open, setOpen }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <>
      <LoadingBar
        color="#ff0000"
        height={2}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <header className="header">
        <Headerleft
          open={open}
          setOpen={setOpen}
          progress={progress}
          setProgress={setProgress}
        />
        <Headercenter
          open={open}
          setOpen={setOpen}
          progress={progress}
          setProgress={setProgress}
        />
        <Headerright />
      </header>
    </>
  );
};

export default Header;
