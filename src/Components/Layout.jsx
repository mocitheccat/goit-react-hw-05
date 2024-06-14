import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const blockedLayout = ["/login"];
  // console.log(location);

  if (blockedLayout.includes(location.pathname)) {
    return <>{children}</>;
  } else {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
  }
};

export default Layout;
