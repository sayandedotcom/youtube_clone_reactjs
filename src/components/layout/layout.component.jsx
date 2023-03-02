import { useState } from "react";
import Container from "../container/container.component";
import Header from "../header/header.component";
import SidebarClose from "../sidebarclose/sidebarclose.component";
import SidebarOpen from "../sidebaropen/sidebar.component";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Header setOpen={setOpen} open={open} />
      {open ? <SidebarOpen /> : <SidebarClose />}
      <Container open={open}>{children}</Container>
    </>
  );
};

export default Layout;
