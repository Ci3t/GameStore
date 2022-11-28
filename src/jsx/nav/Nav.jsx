import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

function Nav() {
  return (
    <div>
      <>
        <MDBNavbar  light bgColor="dark">
          <MDBContainer fluid>
            <MDBNavbarBrand>Fixed top</MDBNavbarBrand>

            <div className="nav-Link">
              <Link to="/">Home</Link>

              <Link to="/store">Store</Link>
            </div>
          </MDBContainer>
        </MDBNavbar>
      </>
    </div>
  );
}

export default Nav;
