import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as React from "react";

function Register() {
  const [disabled, setDisabled] = React.useState(false);

  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  //ONCLICK FUNCTION FOR ADDING BENEFICIARY

  //Post Request to API
  async function addBeneficiary(e) {
    setDisabled(true);
    const data = {
      fname: fullname,
      email: email,
      password: password,
      full_address: address,
      phone_number: phone,
      password: password,
    };
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/register`, {
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
  }

  return (
    <div
      className="d-flex justify-content-around"
      style={{
        marginTop: "40px",
      }}
    >
      <Card style={{ width: "22rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
        />
        <Card.Body>
          <Card.Title>Create account</Card.Title>
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
                placeholder="Full Name"
                aria-label="Full Name"
                aria-describedby="basic-addon1"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
            </InputGroup>

            {/* Password */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
              <Form.Control
                type="number"
                disabled={disabled}
                placeholder="Phone Number"
                aria-label="Phone Number"
                aria-describedby="basic-addon1"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
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
                value={email}
              />
            </InputGroup>

            {/* Password */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
              <Form.Control
                type="text"
                disabled={disabled}
                placeholder="Full Address"
                aria-label="Full Address"
                aria-describedby="basic-addon1"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </InputGroup>

            {/* Password */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
              <Form.Control
                type="password"
                disabled={disabled}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </InputGroup>
          </Card.Text>
          <Button
            size="sm"
            variant="primary"
            disabled={disabled}
            onClick={() => {
              setDisabled(true);
              addBeneficiary();
            }}
          >
            {disabled != true ? "Register" : "Registering..."}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
