import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

export default function Withdraw() {
  const [value, setValue] = useState([1, 3]);

  
  const handleChange = (val) => setValue(val);

  async function Withdraw(){
    alert("Payment Successful");
  }

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
              <Card.Title>
                Current Balance: <span style={{ color: "red" }}>23 INR</span>
              </Card.Title>
              <Card.Title>
                {/* Select beneficiary */}
                <ToggleButtonGroup
                  type="checkbox"
                  value={value}
                  onChange={handleChange}
                >
                  <ToggleButton
                    id="tbg-btn-1"
                    value={1}
                    style={{
                      backgroundColor: "#f5f5f5",
                      border: "1px solid #f5f5f5",
                      margin: "10px",
                    }}
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.mymoneysage.in/blog/wp-content/uploads/2019/11/Bank-account-1.png"
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "16px",
                            color: "black",
                          }}
                        >
                          Harsh Singh
                        </Card.Title>
                        <Card.Text>
                          <span
                            style={{
                              fontSize: "14px",
                              color: "black",
                            }}
                          >
                            <b>Account Number:</b>
                            <br></br>
                            <b>873458965464</b>
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </ToggleButton>
                  <ToggleButton
                    id="tbg-btn-2"
                    value={2}
                    style={{
                      backgroundColor: "#f5f5f5",
                      border: "1px solid #f5f5f5",
                      margin: "10px",
                    }}
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="https://www.mymoneysage.in/blog/wp-content/uploads/2019/11/Bank-account-1.png"
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "16px",
                            color: "black",
                          }}
                        >
                          Sujeet Singh
                        </Card.Title>
                        <Card.Text>
                          <span
                            style={{
                              fontSize: "14px",
                              color: "black",
                            }}
                          >
                            <b>UPI ID:</b>
                            <br></br>
                            <b>sj9369390970@okhdfcbank</b>
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Card.Title>
              <Card.Text>
                <Button variant="secondary" size="sm" onClick={Withdraw}>
                  Withdraw
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>

        <Tab
          eventKey="Withdraw-History"
          title="Withdraw History"
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
                    <th>Beneficiary ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>23,900 INR</td>
                    <td>Monday, 25 July 2022</td>
                    <td>#HFHDFHDSFF</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>23,900 INR</td>
                    <td>Monday, 25 July 2022</td>
                    <td>#HFHDFHDSFF</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>23,900 INR</td>
                    <td>Monday, 25 July 2022</td>
                    <td>#HFHDFHDSFF</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
