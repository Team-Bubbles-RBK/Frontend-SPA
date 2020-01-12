//this layout after the login
import Footer from "../components/footer";
import Nav from "../components/Nav";

export default ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);
