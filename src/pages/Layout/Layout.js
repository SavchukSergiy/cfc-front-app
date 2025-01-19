import { Outlet } from "react-router-dom";
import './Layout.css';

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const Layout = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;