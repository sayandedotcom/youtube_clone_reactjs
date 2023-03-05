import { useState } from "react";
import Container from "../container/container.component";
import Watchcontainer from "../watchcontainer/watchcontainer.component";
import Header from "../header/header.component";
import LoadingBar from "react-top-loading-bar";
const Layout = ({ progress, setProgress, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <LoadingBar
        color="#ff0000"
        height={2}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header
        setOpen={setOpen}
        open={open}
        progress={progress}
        setProgress={setProgress}
      />
      {children.type.name === "Watchpage" ? (
        <Watchcontainer open={open}>{children}</Watchcontainer>
      ) : (
        <Container open={open}>{children}</Container>
      )}
    </>
  );
};

export default Layout;
