import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Register from "./Register";
import Beneficiary from "./Beneficiary";
import { Routes, Link, Outlet, useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();

  // location.pathname === "/dashboard" ?
  console.log(location.pathname);

  const menu = [
    {
      id: 1,
      name: "Home",
      link: "",
      icon: "fa fa-tachometer-alt",
      active: location.pathname === "/dashboard/" ? true : false,
    },
    {
      id: 2,
      name: "Beneficiary",
      link: "beneficiary",
      icon: "fa fa-users",
      active: location.pathname === "/dashboard/beneficiary" ? true : false,
    },
    {
      id: 3,
      name: "Request",
      link: "request",
      icon: "fa fa-user-plus",
      active: location.pathname === "/dashboard/request" ? true : false,
    },
    {
      id: 4,
      name: "Withdraw",
      link: "withdraw",
      icon: "fa fa-sign-out-alt",
      active: location.pathname === "/dashboard/withdraw" ? true : false,
    },
  ];
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Ankush Shing</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menu.map((item) => (
                <Link
                  key={item.id}
                  to={`/dashboard/${item.link}`}
                  className="link-dark p-2"
                  style={{
                    textDecoration: "none",
                    // backgroundColor: `/dashboard/${item.link === location.pathname ? "#b5b5b5" : "dedede"}`,
                    backgroundColor: `${
                      item.active === true ? "#b5b5b5" : "transparent"
                    }`,
                    marginRight: "10px",
                    "&:hover": {
                      backgroundColor: "#b5b5b5",
                      color: "#000",
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
              {/* <Link to="/dashboard/history" className="link-dark p-2">
                History
              </Link> */}
            </Nav>
            <Form className="d-flex">
              {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Dashboard;
