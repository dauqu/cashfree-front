import * as React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export default function Home() {
  const [profile, setProfile] = React.useState([]);

  async function getProfile() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/profile`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setProfile(data);
  }

  React.useEffect(() => {
    getProfile();
  }, []);

  return (
    <div
      className="card"
      style={{
        margin: "1%",
        padding: "1%",
        textAlign: "left",
        backgroundColor: "#f5f5f5",
        border: "1px solid #f5f5f5",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "4rem",
              }}
            >
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(profile.current_amount)}
              {/* {`${profile.current_amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
            </div>
          </Card.Title>
          <Card.Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
              }}
            >
              Can i withdraw the amount?
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
                fontFamily: "Roboto",
                color: `${profile.can_withdraw != true ? "red" : "green"}`,
                marginBottom: "50px",
              }}
            >
              <b>{profile.can_withdraw != true ? "No" : "Yes"}</b>
            </div>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush"></ListGroup>
        <Card.Body>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Full Name</div>
                {profile.fname}
              </div>
              <Badge bg="primary" pill></Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Phone Number</div>
                +91 {profile.phone_number}
              </div>
              <Badge bg="primary" pill></Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Email</div>
                {profile.email}
              </div>
              <Badge bg="primary" pill></Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Full Address</div>
                {profile.full_address}
              </div>
              <Badge bg="primary" pill></Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Register date</div>
                {profile.createdAt}
              </div>
              <Badge bg="primary" pill></Badge>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
