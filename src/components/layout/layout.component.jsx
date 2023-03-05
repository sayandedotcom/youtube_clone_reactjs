import { useState } from "react";
import Container from "../container/container.component";
import Watchcontainer from "../watchcontainer/watchcontainer.component";
import Header from "../header/header.component";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Header setOpen={setOpen} open={open} />
      {children.type.name === "Watchpage" ? (
        <Watchcontainer open={open}>{children}</Watchcontainer>
      ) : (
        <Container open={open}>{children}</Container>
      )}
    </>
  );
};

export default Layout;
