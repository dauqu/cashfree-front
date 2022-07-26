import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

export default function Beneficiary() {
  const [disabled, setDisabled] = React.useState(false);

  //
  const [beneficiary, setBeneficiary] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [bankaccount, setBankaccount] = React.useState("");
  const [IFSC, setIFSC] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [pin, setPin] = React.useState("");

  //ONCLICK FUNCTION FOR ADDING BENEFICIARY
  const handleClick = () => {
    //Generate 10 digit random number
    const random = Math.floor(Math.random() * 10000);

    //Get current date and time
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();

    //Generate unique id
    const id = `${day}${month}${year}${hour}${minute}${second}${millisecond}${random}`;
    setBeneficiary(id);
  };

  //Post Request to API
  async function addBeneficiary(e) {
    setDisabled(true);
    const data = {
      beneficiary,
      name,
      phone,
      email,
      address,
      bankaccount,
      IFSC,
      city,
      state,
      pin,
    };
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/beneficiary/add`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    setDisabled(false);
    alert("Beneficiary Added Successfully");
  }

  const [value, setValue] = React.useState([1, 3]);

  const handleChange = (val) => setValue(val);

  //get beneficiary list from API
  const [beneficiaryList, setBeneficiaryList] = React.useState([]);
  async function getBeneficiaryList() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/beneficiary/get`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setBeneficiaryList(data);
  }

  React.useEffect(() => {
    getBeneficiaryList();
  }, []);

  return (
    <div
      className="d-flex justify-content-around"
      style={{
        marginTop: "40px",
        width: "100%",
      }}
    >
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          marginTop: "40px",
          width: "100%",
        }}
      >
        <Tabs
          defaultActiveKey="Beneficiary"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Beneficiary" title="Add Beneficiary">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Add Beneficiary</Card.Title>
                <Card.Text
                  style={{
                    marginTop: "20px",
                  }}
                >
                  {/* Full Name */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="Beneficiary ID"
                      aria-label="Beneficiary ID"
                      aria-describedby="basic-addon1"
                      value={beneficiary}
                      onChange={(e) => setBeneficiary(e.target.value)}
                      onClick={handleClick}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="email"
                      disabled={disabled}
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="Bank Account"
                      aria-label="Bank Account"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setBankaccount(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="IFSC Code"
                      aria-label="IFSC Code"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setIFSC(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="Address Line 1"
                      aria-label="Address Line 1"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="City"
                      aria-label="City"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="State"
                      aria-label="State"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    <Form.Control
                      type="text"
                      disabled={disabled}
                      placeholder="Pin Code"
                      aria-label="Pin Code"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </InputGroup>
                </Card.Text>
                <Button
                  size="sm"
                  variant="primary"
                  disabled={disabled}
                  onClick={() => {
                    //   setDisabled(true);
                    addBeneficiary();
                  }}
                >
                  {disabled != true ? "Add" : "Adding..."}
                </Button>
              </Card.Body>
            </Card>
          </Tab>

          <Tab
            eventKey="Beneficiary List"
            title="Beneficiary"
            style={{
              width: "100%",
            }}
          >
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>
                  {/* Select beneficiary */}
                  <ToggleButtonGroup
                    type="checkbox"
                    value={value}
                    onChange={handleChange}
                  >
                    {beneficiaryList.map((beneficiary) => (
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
                    ))}
                  </ToggleButtonGroup>
                </Card.Title>
                <Card.Text>
                  <Button variant="secondary" size="sm">
                    Withdraw
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
