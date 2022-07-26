import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Request() {
  const [amount, setAmount] = useState(0);
  const [purpose, setPurpose] = useState("");

  const [requests, setRequests] = useState([]);
  //Get all requests
  async function getrequests() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/request/my`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setRequests(data);
    if (response.ok) {
      return data;
    } else {
      alert("Request failed");
    }
  }

  async function addrequest() {
    const response = await fetch("http://localhost:4000/request", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        purpose: purpose,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert("Request added successfully");
      getrequests();
    } else {
      alert("Request failed");
      getrequests();
    }
  }




  useEffect(() => {
    getrequests();
  }, []);




  return (
    <div
      style={{
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "40px",
      }}
    >
      <Tabs
        defaultActiveKey="Request"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Request" title="Request">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Request Amount</Card.Title>
              <Card.Title>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">INR</InputGroup.Text>
                  <Form.Control
                    placeholder="Amount"
                    aria-label="Amount"
                    aria-describedby="basic-addon1"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">?</InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    placeholder="Purpose"
                    aria-label="Purpose"
                    aria-describedby="basic-addon1"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  />
                </InputGroup>
              </Card.Title>
              <Card.Text>
                <Button variant="secondary" size="sm" onClick={
                  addrequest
                }>
                  Send Request
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>

        <Tab
          eventKey="Requested Amount"
          title="Requested Amount"
          style={{
            width: "100%",
          }}
        >
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td>1</td>
                    <td>23,900 INR</td>
                    <td>Monday, 25 July 2022</td>
                    <td>Approved</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>23,900 INR</td>
                    <td>Monday, 25 July 2022</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>23,900 INR</td>
                    <td>Monday, 25 July 2022</td>
                    <td>Pending</td>
                  </tr> */}
                  {requests.map((request, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{request.amount}</td>
                      <td>{request.createdAt}</td>
                      <td>{request.is_approved === true ? "Approved" : "Pending"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
