import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
export { default as Footer } from './Footer';
export { default as Nav } from './Nav';
