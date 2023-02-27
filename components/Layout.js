import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Banner from "./Banner.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
