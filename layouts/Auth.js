//this layout after the login
import Footer from "../components/footer";
import Nav from "../components/nav";

export default ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);
