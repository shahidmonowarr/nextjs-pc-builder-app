import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
