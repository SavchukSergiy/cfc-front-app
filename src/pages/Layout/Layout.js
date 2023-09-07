import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import '../../static files/layout/images';

const Layout = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cottagenewway">Cottage new way</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;