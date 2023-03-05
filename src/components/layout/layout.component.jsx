import { useState } from "react";
import Container from "../container/container.component";
import Watchcontainer from "../watchcontainer/watchcontainer.component";
import Header from "../header/header.component";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { initialProgress } from "../../redux/loaderSlice";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const { progress } = useSelector((state) => state.loader);
  return (
    <>
      <LoadingBar
        color="#ff0000"
        height={2}
        loaderSpeed={1000}
        progress={progress}
        onLoaderFinished={() => dispatch(initialProgress())}
      />
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
